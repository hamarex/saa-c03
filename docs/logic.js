(function (root) {
  'use strict';

  var KEY = 'saa-c03.progress.v1';
  var EXAM = { total: 65, scored: 50, minutes: 130, minScaled: 100, maxScaled: 1000, passScaled: 720 };
  var DOMAINS = [
    { no: 1, name: 'セキュアなアーキテクチャ', weight: 30 },
    { no: 2, name: '弾力性に優れたアーキテクチャ', weight: 26 },
    { no: 3, name: '高性能なアーキテクチャ', weight: 24 },
    { no: 4, name: 'コストを最適化したアーキテクチャ', weight: 20 }
  ];
  var HISTORY_MAX = 20;
  var PASS_RATE = { min: 0.1, max: 1 };
  var LOW_TIME_MS = 10 * 60000; // 残り10分以下で警告表示
  var MAX_TS = 8.64e15; // Date の上限
  var FORBIDDEN_KEYS = ['__proto__', 'constructor', 'prototype'];

  // ---------- 採点 ----------
  function gradeOx(q, ans) { return { correct: ans === q.answer }; }

  // 文字列 / 配列 -> 大文字・重複排除・昇順の配列。null/undefined/空 -> []
  function normalizeAnswer(ans) {
    if (ans === null || ans === undefined) return [];
    var items = Array.isArray(ans) ? ans : [ans];
    var out = [];
    items.forEach(function (it) {
      var m = String(it).toUpperCase().match(/[A-Z]/g);
      if (m) m.forEach(function (c) { if (out.indexOf(c) < 0) out.push(c); });
    });
    return out.sort();
  }

  function gradeMc(q, ans) {
    var want = normalizeAnswer(q.answer), got = normalizeAnswer(ans);
    var missing = want.filter(function (c) { return got.indexOf(c) < 0; });
    var extra = got.filter(function (c) { return want.indexOf(c) < 0; });
    return { correct: got.length > 0 && want.length > 0 && !missing.length && !extra.length, missing: missing, extra: extra };
  }

  // ---------- 進捗 ----------
  function emptyProgress() {
    return {
      version: 1,
      position: null,
      lessonsDone: [],
      quizResults: {},
      wrongLog: [],
      chapterTest: {},
      reports: [],
      examHistory: [],
      settings: { passRate: 0.7, unlockAll: true, examTimeLimit: true }
    };
  }

  function isObj(x) { return x !== null && typeof x === 'object' && !Array.isArray(x); }
  function isStrArr(x) { return Array.isArray(x) && x.every(function (s) { return typeof s === 'string'; }); }
  function isNum(x) { return typeof x === 'number' && isFinite(x); }
  function isTs(x) { return isNum(x) && x >= 0 && x <= MAX_TS; }
  function isPage(x) { return x === undefined || (isNum(x) && x >= 0 && Math.floor(x) === x); }

  function validPosition(pos) {
    return pos === null || (isObj(pos) && isNum(pos.ch) && typeof pos.lessonId === 'string' && isPage(pos.page));
  }
  function validHistoryItem(h) {
    return isObj(h) && isTs(h.ts) && isNum(h.scaled) && h.scaled >= EXAM.minScaled && h.scaled <= EXAM.maxScaled && isNum(h.correct) && isNum(h.scored) && typeof h.pass === 'boolean' &&
      (h.byDomain === undefined || isObj(h.byDomain));
  }
  function validSettings(s) {
    return isObj(s) && isNum(s.passRate) && s.passRate >= PASS_RATE.min && s.passRate <= PASS_RATE.max && typeof s.unlockAll === 'boolean' &&
      (s.examTimeLimit === undefined || typeof s.examTimeLimit === 'boolean');
  }
  function allValues(o, pred) { return Object.keys(o).every(function (k) { return pred(o[k]); }); }

  // 任意の深さに __proto__ / constructor / prototype の own キーがあれば true
  function hasForbiddenKey(x) {
    if (Array.isArray(x)) return x.some(hasForbiddenKey);
    if (!isObj(x)) return false;
    return Object.keys(x).some(function (k) { return FORBIDDEN_KEYS.indexOf(k) >= 0 || hasForbiddenKey(x[k]); });
  }

  // 不正なら理由の文字列、正しければ null
  function validate(p) {
    if (hasForbiddenKey(p)) return '使用できないキーが含まれています';
    if (!isObj(p)) return '進捗ファイルの形式が正しくありません';
    if (p.version !== 1) return '対応していないバージョンです';
    if (!validPosition(p.position)) return 'position が不正です';
    if (!isStrArr(p.lessonsDone)) return 'lessonsDone が不正です';
    if (!isObj(p.quizResults) || !allValues(p.quizResults, function (r) { return isObj(r) && typeof r.correct === 'boolean' && isTs(r.ts); })) return 'quizResults が不正です';
    if (!isStrArr(p.wrongLog)) return 'wrongLog が不正です';
    if (!isObj(p.chapterTest) || !allValues(p.chapterTest, function (r) { return isObj(r) && isNum(r.score) && typeof r.passed === 'boolean'; })) return 'chapterTest が不正です';
    if (!Array.isArray(p.reports) || !p.reports.every(function (r) { return isObj(r) && typeof r.id === 'string' && typeof r.memo === 'string'; })) return 'reports が不正です';
    if (p.examHistory !== undefined && !(Array.isArray(p.examHistory) && p.examHistory.every(validHistoryItem))) return 'examHistory が不正です';
    if (!validSettings(p.settings)) return 'settings が不正です';
    return null;
  }

  function loadProgress(storage) {
    var raw;
    try { raw = storage.getItem(KEY); } catch (e) { return { progress: emptyProgress(), ok: false }; }
    if (raw === null || raw === undefined) return { progress: emptyProgress(), ok: true };
    try {
      var p = JSON.parse(raw);
      if (validate(p) === null) return { progress: p, ok: true };
    } catch (e) { /* 壊れたJSON */ }
    return { progress: emptyProgress(), ok: false };
  }

  function saveProgress(storage, p) {
    try { storage.setItem(KEY, JSON.stringify(p)); return true; } catch (e) { return false; }
  }

  function importProgress(json, current) {
    var p;
    try { p = JSON.parse(json); } catch (e) { return { progress: current, error: 'JSONとして読めませんでした' }; }
    var err = validate(p);
    if (err) return { progress: current, error: err };
    return { progress: p, error: null };
  }

  // ---------- 進捗の不変更新（すべて新しいオブジェクトを返す） ----------
  // __proto__ も普通の own キーとして設定する（プロトタイプを書き換えない）
  function setKey(obj, k, v) {
    Object.defineProperty(obj, k, { value: v, writable: true, enumerable: true, configurable: true });
    return obj;
  }
  function assign(base, patch) {
    var out = {};
    Object.keys(base).forEach(function (k) { setKey(out, k, base[k]); });
    Object.keys(patch).forEach(function (k) { setKey(out, k, patch[k]); });
    return out;
  }

  function recordAnswer(p, id, correct, ts) {
    var result = setKey({}, id, { correct: correct, ts: ts });
    var without = p.wrongLog.filter(function (x) { return x !== id; });
    var wrongLog = correct ? without : (p.wrongLog.indexOf(id) >= 0 ? p.wrongLog : without.concat([id]));
    return assign(p, { quizResults: assign(p.quizResults, result), wrongLog: wrongLog });
  }

  function markLessonDone(p, id) {
    return p.lessonsDone.indexOf(id) >= 0 ? p : assign(p, { lessonsDone: p.lessonsDone.concat([id]) });
  }

  function setPosition(p, pos) { return assign(p, { position: pos }); }

  // 合格済みの章で不合格になっても passed は true のまま、score は最高値を保つ
  function recordChapterTest(p, no, rate) {
    var prev = p.chapterTest[no];
    var passed = rate >= p.settings.passRate;
    var keep = !!(prev && prev.passed);
    var entry = { score: (keep && !passed) ? Math.max(prev.score, rate) : rate, passed: passed || keep };
    var patch = {};
    patch[no] = entry;
    return assign(p, { chapterTest: assign(p.chapterTest, patch) });
  }

  function addReport(p, id, memo, ts) { return assign(p, { reports: p.reports.concat([{ id: id, memo: memo, ts: ts }]) }); }
  function removeReport(p, index) { return assign(p, { reports: p.reports.filter(function (r, i) { return i !== index; }) }); }

  function addExamHistory(p, entry) {
    var list = (p.examHistory || []).concat([entry]);
    return assign(p, { examHistory: list.slice(Math.max(0, list.length - HISTORY_MAX)) });
  }

  function updateSettings(p, patch) { return assign(p, { settings: assign(p.settings, patch) }); }

  // 保存位置が実在レッスンかつ章番号一致でなければ null にする。chapterNoOf(lessonId) は章番号 or undefined
  function fixPosition(p, chapterNoOf) {
    var pos = p.position;
    if (pos === null || pos === undefined) return p;
    if (chapterNoOf(pos.lessonId) === pos.ch) return p;
    return assign(p, { position: null });
  }

  // ---------- 総仕上げの時間 ----------
  function examLimitMs() { return EXAM.minutes * 60000; }
  function isExamExpired(startMs, nowMs, limitOn) { return !!limitOn && nowMs - startMs >= examLimitMs(); }
  // スコア(minScaled..maxScaled) を 0..100 に正規化
  function scaledToPercent(scaled) {
    var r = (scaled - EXAM.minScaled) / (EXAM.maxScaled - EXAM.minScaled) * 100;
    return Math.round(Math.min(100, Math.max(0, r)));
  }

  // ---------- 文言 ----------
  function chapterPassMessage(p, nextNo) {
    if (nextNo === null || nextNo === undefined) return '全章の学習が完了しました。';
    return p.settings.unlockAll ? '全章開放中のため、第' + nextNo + '章はすでに開いています。' : '第' + nextNo + '章が開きました。';
  }
  function chapterEndHint(p) {
    return p.settings.unlockAll ? '' : '、次章が開きます';
  }

  // ---------- 解錠 ----------
  function isChapterUnlocked(p, no) {
    if (no <= 1 || p.settings.unlockAll) return true;
    var t = p.chapterTest[no - 1];
    return !!(t && t.passed);
  }

  function examUnlocked(p, data) {
    if (p.settings.unlockAll) return true;
    return data.chapters.every(function (c) { var t = p.chapterTest[c.no]; return !!(t && t.passed); });
  }

  // ---------- 出題 ----------
  function sum(a) { return a.reduce(function (x, y) { return x + y; }, 0); }

  // 重みに比例した最大剰余法。caps（各項目の上限）を超えず、余りは重みの大きい順に容量のある項目へ。
  function allocateByWeights(weights, n, caps) {
    var cp = weights.map(function (w, i) { return caps && caps[i] !== undefined ? caps[i] : Infinity; });
    var wsum = sum(weights);
    var target = Math.min(n, sum(cp));
    var quota = weights.map(function (w) { return wsum ? w * target / wsum : 0; });
    var alloc = quota.map(function (q, i) { return Math.min(cp[i], Math.floor(q)); });
    var order = weights.map(function (w, i) { return i; }).sort(function (a, b) {
      return (quota[b] - alloc[b]) - (quota[a] - alloc[a]) || weights[b] - weights[a] || a - b;
    });
    var left = target - sum(alloc);
    while (left > 0) {
      var moved = false;
      for (var k = 0; k < order.length && left > 0; k++) {
        if (alloc[order[k]] < cp[order[k]]) { alloc[order[k]]++; left--; moved = true; }
      }
      if (!moved) break;
    }
    return alloc;
  }

  function sample(arr, k, rng) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(rng() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a.slice(0, k);
  }

  function allMc(data) {
    return data.chapters.reduce(function (acc, c) { return acc.concat(c.mc); }, []);
  }

  function domainWeights() { return DOMAINS.map(function (d) { return d.weight; }); }

  function pickByDomain(pool, rng) {
    var groups = DOMAINS.map(function (d) { return pool.filter(function (q) { return q.domain === d.no; }); });
    var alloc = allocateByWeights(domainWeights(), EXAM.total, groups.map(function (g) { return g.length; }));
    return groups.map(function (g, i) { return sample(g, alloc[i], rng); });
  }

  function pickUnscored(picked, rng) {
    var total = sum(picked.map(function (g) { return g.length; }));
    var n = Math.min(EXAM.total - EXAM.scored, Math.max(0, total - EXAM.scored));
    var alloc = allocateByWeights(domainWeights(), n, picked.map(function (g) { return g.length; }));
    return picked.reduce(function (ids, g, i) {
      return ids.concat(sample(g, alloc[i], rng).map(function (q) { return q.id; }));
    }, []);
  }

  function buildExam(data, rng) {
    rng = rng || Math.random;
    var picked = pickByDomain(allMc(data), rng);
    var unscoredIds = pickUnscored(picked, rng);
    var flat = picked.reduce(function (a, g) { return a.concat(g); }, []);
    return { mc: sample(flat, flat.length, rng), unscoredIds: unscoredIds };
  }

  function chapterOf(id) {
    var m = /^c(\d+)-/.exec(id);
    return m ? parseInt(m[1], 10) : 0;
  }

  function bump(map, key, ok) {
    var b = map[key] || { correct: 0, total: 0 };
    var next = {}; next[key] = { correct: b.correct + (ok ? 1 : 0), total: b.total + 1 };
    return assign(map, next);
  }

  // answers: { [問題ID]: string[] | string }。キーが無い問題は未回答で不正解。
  function scoreExam(exam, answers) {
    answers = answers || {};
    var unscored = {};
    exam.unscoredIds.forEach(function (id) { unscored[id] = true; });
    var byDomain = {}, byChapter = {}, correctAll = 0, correctScored = 0;
    exam.mc.forEach(function (q) {
      var has = Object.prototype.hasOwnProperty.call(answers, q.id);
      var ok = has && gradeMc(q, answers[q.id]).correct;
      byDomain = bump(byDomain, q.domain, ok);
      byChapter = bump(byChapter, chapterOf(q.id), ok);
      if (ok) { correctAll++; if (!unscored[q.id]) correctScored++; }
    });
    var scored = exam.mc.length - exam.unscoredIds.length;
    var scaled = scored > 0 ? Math.round(EXAM.minScaled + (EXAM.maxScaled - EXAM.minScaled) * correctScored / scored) : EXAM.minScaled;
    return {
      scaled: scaled, max: EXAM.maxScaled, pass: scaled >= EXAM.passScaled,
      correctScored: correctScored, scored: scored, correctAll: correctAll, total: exam.mc.length,
      byDomain: byDomain, byChapter: byChapter, unscoredIds: exam.unscoredIds.slice()
    };
  }

  // 総仕上げの採点対象外問題の一覧（番号は1始まり）
  function unscoredSummary(exam, answers) {
    answers = answers || {};
    var skip = {};
    exam.unscoredIds.forEach(function (id) { skip[id] = true; });
    var out = [];
    exam.mc.forEach(function (q, i) {
      if (!skip[q.id]) return;
      var has = Object.prototype.hasOwnProperty.call(answers, q.id);
      out.push({ no: i + 1, id: q.id, correct: has && gradeMc(q, answers[q.id]).correct });
    });
    return out;
  }

  var api = {
    PASS_RATE: PASS_RATE, LOW_TIME_MS: LOW_TIME_MS,
    fixPosition: fixPosition, examLimitMs: examLimitMs, isExamExpired: isExamExpired, scaledToPercent: scaledToPercent,
    chapterPassMessage: chapterPassMessage, chapterEndHint: chapterEndHint, unscoredSummary: unscoredSummary,
    STORAGE_KEY: KEY, EXAM: EXAM, DOMAINS: DOMAINS,
    gradeOx: gradeOx, gradeMc: gradeMc, normalizeAnswer: normalizeAnswer,
    emptyProgress: emptyProgress, loadProgress: loadProgress, saveProgress: saveProgress, importProgress: importProgress,
    isChapterUnlocked: isChapterUnlocked, examUnlocked: examUnlocked,
    buildExam: buildExam, scoreExam: scoreExam, allocateByWeights: allocateByWeights,
    chapterOf: chapterOf,
    recordAnswer: recordAnswer, markLessonDone: markLessonDone, setPosition: setPosition,
    recordChapterTest: recordChapterTest, addReport: addReport, removeReport: removeReport,
    addExamHistory: addExamHistory, updateSettings: updateSettings
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  root.Logic = api;
})(typeof window !== 'undefined' ? window : globalThis);
