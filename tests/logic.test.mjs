import test from 'node:test';
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
const L = createRequire(import.meta.url)('../app/logic.js');

const pad = (n) => String(n).padStart(2, '0');
function mkMc(ch, i, domain, multi = false) {
  return {
    id: `c${pad(ch)}-mc-${pad(i)}`, stem: 's', choices: ['a', 'b', 'c', 'd', 'e'].slice(0, multi ? 5 : 4),
    answer: multi ? ['A', 'C'] : ['B'], selectCount: multi ? 2 : 1, domain, choiceExplain: [], tip: 't', src: i,
  };
}
// 章 1..4 に各 domain を 30 問ずつ（計 120 問）、うち複数選択を混ぜる
function dummyData() {
  const chapters = [1, 2, 3, 4].map((no) => {
    const mc = [];
    for (let i = 1; i <= 30; i++) mc.push(mkMc(no, i, no, i % 5 === 0));
    return { no, title: 'ch' + no, lessons: [], ox: [], mc };
  });
  return { chapters };
}
function seeded(seed) { let s = seed; return () => ((s = (s * 1664525 + 1013904223) % 4294967296) / 4294967296); }
const countBy = (arr, f) => arr.reduce((m, x) => ({ ...m, [f(x)]: (m[f(x)] || 0) + 1 }), {});

test('定数', () => {
  assert.equal(L.STORAGE_KEY, 'saa-c03.progress.v1');
  assert.deepEqual(L.EXAM, { total: 65, scored: 50, minutes: 130, minScaled: 100, maxScaled: 1000, passScaled: 720 });
  assert.deepEqual(L.DOMAINS.map((d) => d.weight), [30, 26, 24, 20]);
});

test('gradeOx', () => {
  assert.equal(L.gradeOx({ answer: true }, true).correct, true);
  assert.equal(L.gradeOx({ answer: true }, false).correct, false);
  assert.equal(L.gradeOx({ answer: false }, false).correct, true);
});

test('normalizeAnswer', () => {
  assert.deepEqual(L.normalizeAnswer('b'), ['B']);
  assert.deepEqual(L.normalizeAnswer(['c', 'a', 'C']), ['A', 'C']);
  assert.deepEqual(L.normalizeAnswer('A, C'), ['A', 'C']);
  assert.deepEqual(L.normalizeAnswer(null), []);
  assert.deepEqual(L.normalizeAnswer(undefined), []);
  assert.deepEqual(L.normalizeAnswer([]), []);
  assert.deepEqual(L.normalizeAnswer(['', ' ']), []);
});

test('gradeMc: 単一選択', () => {
  const q = { answer: ['B'] };
  assert.equal(L.gradeMc(q, ['B']).correct, true);
  assert.equal(L.gradeMc(q, 'B').correct, true);
  assert.equal(L.gradeMc(q, 'b').correct, true);
  assert.equal(L.gradeMc(q, ['C']).correct, false);
  assert.equal(L.gradeMc(q, []).correct, false);
  assert.equal(L.gradeMc(q, undefined).correct, false);
});

test('gradeMc: 複数選択（順序不問・部分点なし・選び漏れ・余分）', () => {
  const q = { answer: ['A', 'C'] };
  assert.equal(L.gradeMc(q, ['C', 'A']).correct, true);
  const miss = L.gradeMc(q, ['A']);
  assert.equal(miss.correct, false);
  assert.deepEqual(miss.missing, ['C']);
  const extra = L.gradeMc(q, ['A', 'C', 'D']);
  assert.equal(extra.correct, false);
  assert.deepEqual(extra.extra, ['D']);
  assert.equal(L.gradeMc(q, ['A', 'D']).correct, false);
  assert.equal(L.gradeMc({ answer: [] }, []).correct, false);
});

test('emptyProgress の形（unlockAll 既定 true）', () => {
  const p = L.emptyProgress();
  assert.equal(p.version, 1);
  assert.equal(p.position, null);
  assert.deepEqual(p.examHistory, []);
  assert.equal(p.settings.passRate, 0.7);
  assert.equal(p.settings.unlockAll, true);
  assert.equal(p.settings.examTimeLimit, true);
  assert.notEqual(L.emptyProgress(), L.emptyProgress());
  assert.equal(L.validateForTest, undefined);
});

test('loadProgress: 壊れた/不正/例外/null', () => {
  const empty = L.emptyProgress();
  assert.deepEqual(L.loadProgress({ getItem: () => '{broken' }), { progress: empty, ok: false });
  assert.equal(L.loadProgress({ getItem: () => { throw new Error('denied'); } }).ok, false);
  assert.equal(L.loadProgress(null).ok, false);
  assert.equal(L.loadProgress(undefined).ok, false);
  assert.equal(L.loadProgress({ getItem: () => '{"version":2}' }).ok, false);
  assert.equal(L.loadProgress({ getItem: () => '[]' }).ok, false);
  assert.deepEqual(L.loadProgress({ getItem: () => null }), { progress: empty, ok: true });
  assert.deepEqual(L.loadProgress({ getItem: () => undefined }), { progress: empty, ok: true });
});

test('save -> load の往復と保存キー', () => {
  const mem = {};
  const st = { getItem: (k) => (k in mem ? mem[k] : null), setItem: (k, v) => { mem[k] = v; } };
  const p = L.recordAnswer(L.emptyProgress(), 'c01-mc-01', false, 5);
  assert.equal(L.saveProgress(st, p), true);
  assert.ok('saa-c03.progress.v1' in mem);
  const r = L.loadProgress(st);
  assert.equal(r.ok, true);
  assert.deepEqual(r.progress, p);
});

test('saveProgress: 例外・storage 無しは false', () => {
  assert.equal(L.saveProgress({ setItem: () => { throw new Error('quota'); } }, L.emptyProgress()), false);
  assert.equal(L.saveProgress(null, L.emptyProgress()), false);
});

test('importProgress: 正常と不正', () => {
  const cur = L.emptyProgress();
  const good = JSON.stringify({ ...cur, lessonsDone: ['c01-l01'] });
  const ok = L.importProgress(good, cur);
  assert.equal(ok.error, null);
  assert.deepEqual(ok.progress.lessonsDone, ['c01-l01']);
  for (const bad of ['nope', '[]', undefined, '{"version":1}', JSON.stringify({ ...cur, wrongLog: [1] })]) {
    const r = L.importProgress(bad, cur);
    assert.ok(r.error);
    assert.equal(r.progress, cur);
  }
});

test('validate（import 経由）: position / quizResults / chapterTest / reports / settings', () => {
  const cur = L.emptyProgress();
  const bad = (patch) => assert.ok(L.importProgress(JSON.stringify({ ...cur, ...patch }), cur).error, JSON.stringify(patch));
  const good = (patch) => assert.equal(L.importProgress(JSON.stringify({ ...cur, ...patch }), cur).error, null, JSON.stringify(patch));
  good({ position: { ch: 1, lessonId: 'c01-l01' } });
  good({ position: { ch: 1, lessonId: 'c01-l01', page: 0 } });
  bad({ position: { ch: 1, lessonId: 'c01-l01', page: -1 } });
  bad({ position: { ch: 1, lessonId: 'c01-l01', page: 1.5 } });
  bad({ position: { ch: '1', lessonId: 'x' } });
  bad({ lessonsDone: 'x' });
  bad({ quizResults: { a: { correct: 'y', ts: 1 } } });
  good({ quizResults: { a: { correct: true, ts: 1 } } });
  bad({ chapterTest: { 1: { score: 'x', passed: true } } });
  bad({ reports: [{ id: 1, memo: 'a' }] });
  bad({ settings: { passRate: 0.7 } });
  bad({ settings: { passRate: 0.7, unlockAll: true, examTimeLimit: 'yes' } });
  good({ settings: { passRate: 0.7, unlockAll: false } });
  good({ settings: { passRate: 0.7, unlockAll: false, examTimeLimit: false } });
  const h = { ts: 1, scaled: 730, correct: 35, scored: 50, pass: true };
  good({ examHistory: [h, { ...h, byDomain: { 1: { correct: 1, total: 2 } } }] });
  bad({ examHistory: [{ ...h, pass: 'x' }] });
  bad({ examHistory: [{ ts: 1 }] });
  bad({ examHistory: 'x' });
  bad({ examHistory: [{ ...h, byDomain: [] }] });
  const noHistory = { ...cur }; delete noHistory.examHistory;
  assert.equal(L.importProgress(JSON.stringify(noHistory), cur).error, null);
});

test('解錠: isChapterUnlocked / examUnlocked', () => {
  const locked = L.updateSettings(L.emptyProgress(), { unlockAll: false });
  assert.equal(L.isChapterUnlocked(locked, 1), true);
  assert.equal(L.isChapterUnlocked(locked, 2), false);
  const passed = { ...locked, chapterTest: { 1: { score: 0.8, passed: true }, 2: { score: 0.2, passed: false } } };
  assert.equal(L.isChapterUnlocked(passed, 2), true);
  assert.equal(L.isChapterUnlocked(passed, 3), false);
  assert.equal(L.isChapterUnlocked(L.emptyProgress(), 9), true);
  const data = { chapters: [{ no: 1 }, { no: 2 }] };
  assert.equal(L.examUnlocked(locked, data), false);
  assert.equal(L.examUnlocked({ ...locked, chapterTest: { 1: { score: 1, passed: true }, 2: { score: 1, passed: true } } }, data), true);
  assert.equal(L.examUnlocked(L.emptyProgress(), data), true);
});

test('不変更新: 元のオブジェクトは変わらない', () => {
  const p0 = L.emptyProgress();
  const snap = JSON.stringify(p0);
  const p1 = L.recordAnswer(p0, 'x', false, 1);
  assert.notEqual(p1, p0);
  assert.deepEqual(p1.wrongLog, ['x']);
  assert.equal(p1.quizResults.x.correct, false);
  const p2 = L.recordAnswer(p1, 'x', false, 2);
  assert.deepEqual(p2.wrongLog, ['x']);
  const p3 = L.recordAnswer(p2, 'x', true, 3);
  assert.deepEqual(p3.wrongLog, []);
  assert.equal(p3.quizResults.x.ts, 3);
  const p4 = L.markLessonDone(p3, 'c01-l01');
  assert.deepEqual(p4.lessonsDone, ['c01-l01']);
  assert.equal(L.markLessonDone(p4, 'c01-l01'), p4);
  const p5 = L.setPosition(p4, { ch: 1, lessonId: 'c01-l01', page: 2 });
  assert.deepEqual(p5.position, { ch: 1, lessonId: 'c01-l01', page: 2 });
  assert.equal(p4.position, null);
  const p6 = L.addReport(p5, 'c01-mc-01', 'memo', 9);
  assert.equal(p6.reports.length, 1);
  assert.equal(L.removeReport(p6, 0).reports.length, 0);
  assert.equal(p6.reports.length, 1);
  assert.equal(L.updateSettings(p6, { passRate: 0.5 }).settings.passRate, 0.5);
  assert.equal(p6.settings.passRate, 0.7);
  assert.equal(JSON.stringify(p0), snap);
});

test('recordChapterTest: 合格・不合格・最高値保持', () => {
  const p0 = L.emptyProgress();
  const fail = L.recordChapterTest(p0, 1, 0.5);
  assert.deepEqual(fail.chapterTest[1], { score: 0.5, passed: false });
  const pass = L.recordChapterTest(fail, 1, 0.9);
  assert.deepEqual(pass.chapterTest[1], { score: 0.9, passed: true });
  const regress = L.recordChapterTest(pass, 1, 0.4);
  assert.deepEqual(regress.chapterTest[1], { score: 0.9, passed: true });
  assert.deepEqual(L.recordChapterTest(pass, 1, 0.95).chapterTest[1], { score: 0.95, passed: true });
  assert.deepEqual(p0.chapterTest, {});
});

test('addExamHistory: 最大20件で古いものから破棄', () => {
  let p = L.emptyProgress();
  for (let i = 0; i < 25; i++) p = L.addExamHistory(p, { ts: i, scaled: 700, correct: 30, scored: 50, pass: false });
  assert.equal(p.examHistory.length, 20);
  assert.equal(p.examHistory[0].ts, 5);
  assert.equal(p.examHistory[19].ts, 24);
  const legacy = { ...L.emptyProgress() }; delete legacy.examHistory;
  assert.equal(L.addExamHistory(legacy, { ts: 1, scaled: 1, correct: 1, scored: 1, pass: false }).examHistory.length, 1);
});

test('allocateByWeights', () => {
  assert.deepEqual(L.allocateByWeights([30, 26, 24, 20], 65), [19, 17, 16, 13]);
  assert.deepEqual(L.allocateByWeights([30, 26, 24, 20], 50), [15, 13, 12, 10]);
  assert.deepEqual(L.allocateByWeights([30, 26, 24, 20], 15), [4, 4, 4, 3]);
  const capped = L.allocateByWeights([30, 26, 24, 20], 65, [5, 100, 100, 100]);
  assert.equal(capped[0], 5);
  assert.equal(capped.reduce((a, b) => a + b, 0), 65);
  assert.deepEqual(L.allocateByWeights([1, 1], 10, [2, 3]), [2, 3]);
  assert.deepEqual(L.allocateByWeights([1, 1], 0), [0, 0]);
  assert.equal(L.allocateByWeights([0, 0], 5).reduce((a, b) => a + b, 0), 5);
});

test('buildExam: 65問・unscored 15・配分・重複なし・ox なし', () => {
  const ex = L.buildExam(dummyData(), seeded(1));
  assert.equal(ex.mc.length, 65);
  assert.equal(ex.unscoredIds.length, 15);
  assert.equal(new Set(ex.mc.map((q) => q.id)).size, 65);
  assert.equal(ex.ox, undefined);
  const byD = countBy(ex.mc, (q) => q.domain);
  assert.deepEqual([1, 2, 3, 4].map((d) => byD[d]), [19, 17, 16, 13]);
  const ids = new Set(ex.mc.map((q) => q.id));
  assert.ok(ex.unscoredIds.every((id) => ids.has(id)));
  assert.equal(new Set(ex.unscoredIds).size, 15);
  const un = new Set(ex.unscoredIds);
  const scoredByD = countBy(ex.mc.filter((q) => !un.has(q.id)), (q) => q.domain);
  assert.deepEqual([1, 2, 3, 4].map((d) => scoredByD[d]), [15, 13, 12, 10]);
});

test('buildExam: 決定的 rng・既定 rng・プール不足', () => {
  const a = L.buildExam(dummyData(), seeded(7));
  const b = L.buildExam(dummyData(), seeded(7));
  assert.deepEqual(a, b);
  assert.equal(L.buildExam(dummyData()).mc.length, 65);
  const small = { chapters: [{ no: 1, mc: [mkMc(1, 1, 1), mkMc(1, 2, 2), mkMc(1, 3, 2)] }] };
  const s = L.buildExam(small, seeded(1));
  assert.equal(s.mc.length, 3);
  assert.equal(s.unscoredIds.length, 0);
  const mid = { chapters: [{ no: 1, mc: Array.from({ length: 55 }, (_, i) => mkMc(1, i + 1, (i % 4) + 1)) }] };
  const m = L.buildExam(mid, seeded(2));
  assert.equal(m.mc.length, 55);
  assert.equal(m.unscoredIds.length, 5);
  assert.deepEqual(L.buildExam({ chapters: [] }, seeded(1)), { mc: [], unscoredIds: [] });
  const skew = { chapters: [{ no: 1, mc: Array.from({ length: 70 }, (_, i) => mkMc(1, i + 1, 1)) }] };
  assert.equal(L.buildExam(skew, seeded(3)).mc.length, 65);
});

function examAnswers(ex, nCorrectScored, { onlyUnscored = false } = {}) {
  const un = new Set(ex.unscoredIds), a = {};
  let left = nCorrectScored;
  ex.mc.forEach((q) => {
    const isUn = un.has(q.id);
    if (onlyUnscored ? isUn : (!isUn && left > 0)) { a[q.id] = q.answer; if (!isUn) left--; }
    else a[q.id] = ['E'];
  });
  return a;
}

test('scoreExam: 35問で730合格 / 34問で712不合格 / 0問で100 / 50問で1000', () => {
  const ex = L.buildExam(dummyData(), seeded(3));
  const r35 = L.scoreExam(ex, examAnswers(ex, 35));
  assert.equal(r35.scaled, 730); assert.equal(r35.pass, true);
  assert.equal(r35.correctScored, 35); assert.equal(r35.scored, 50); assert.equal(r35.max, 1000);
  const r34 = L.scoreExam(ex, examAnswers(ex, 34));
  assert.equal(r34.scaled, 712); assert.equal(r34.pass, false);
  assert.equal(L.scoreExam(ex, examAnswers(ex, 0)).scaled, 100);
  const full = L.scoreExam(ex, examAnswers(ex, 50));
  assert.equal(full.scaled, 1000); assert.equal(full.pass, true);
});

test('scoreExam: 未回答は不正解・対象外は得点に影響しない・集計は全問', () => {
  const ex = L.buildExam(dummyData(), seeded(4));
  const none = L.scoreExam(ex, {});
  assert.equal(none.scaled, 100); assert.equal(none.correctAll, 0);
  assert.equal(L.scoreExam(ex).scaled, 100);
  const onlyUn = L.scoreExam(ex, examAnswers(ex, 0, { onlyUnscored: true }));
  assert.equal(onlyUn.scaled, 100);
  assert.equal(onlyUn.correctScored, 0);
  assert.equal(onlyUn.correctAll, 15);
  assert.deepEqual(onlyUn.unscoredIds, ex.unscoredIds);
  const r = L.scoreExam(ex, examAnswers(ex, 35));
  const domTotal = Object.values(r.byDomain).reduce((s, b) => s + b.total, 0);
  const chTotal = Object.values(r.byChapter).reduce((s, b) => s + b.total, 0);
  assert.equal(domTotal, 65); assert.equal(chTotal, 65);
  assert.equal(Object.values(r.byDomain).reduce((s, b) => s + b.correct, 0), r.correctAll);
  assert.equal(r.total, 65);
});

test('scoreExam: 文字列回答・複数選択の部分一致は不正解・scored 0', () => {
  const ex = { mc: [mkMc(1, 1, 1), mkMc(1, 5, 1, true)], unscoredIds: [] };
  assert.equal(L.scoreExam(ex, { 'c01-mc-01': 'B', 'c01-mc-05': ['A', 'C'] }).correctAll, 2);
  assert.equal(L.scoreExam(ex, { 'c01-mc-01': 'B', 'c01-mc-05': ['A'] }).correctAll, 1);
  const allUn = L.scoreExam({ mc: ex.mc, unscoredIds: ex.mc.map((q) => q.id) }, {});
  assert.equal(allUn.scaled, 100); assert.equal(allUn.pass, false);
});

test('chapterOf', () => {
  assert.equal(L.chapterOf('c07-mc-03'), 7);
  assert.equal(L.chapterOf('c10-ox-01'), 10);
  assert.equal(L.chapterOf('zzz'), 0);
});

// ---------- レビュー指摘対応 ----------
test('import: __proto__ / constructor / prototype キーを拒否', () => {
  const cur = L.emptyProgress();
  const base = JSON.stringify(cur);
  ['__proto__', 'constructor', 'prototype'].forEach((k) => {
    const top = base.replace(/^\{/, `{"${k}":{"x":1},`);
    assert.ok(L.importProgress(top, cur).error, `top ${k}`);
    const nested = JSON.stringify({ ...cur, quizResults: JSON.parse(`{"${k}":{"correct":true,"ts":1}}`) });
    assert.ok(L.importProgress(nested, cur).error, `quizResults ${k}`);
    const ct = JSON.stringify({ ...cur, chapterTest: JSON.parse(`{"${k}":{"score":1,"passed":true}}`) });
    assert.ok(L.importProgress(ct, cur).error, `chapterTest ${k}`);
  });
  assert.equal(({}).polluted, undefined);
});

test('validate 直接: 禁止キーを含む進捗は拒否', () => {
  const stored = { getItem: () => '{"__proto__":{"a":1},' + JSON.stringify(L.emptyProgress()).slice(1), setItem() {} };
  assert.equal(L.loadProgress(stored).ok, false);
});

test('recordAnswer: id が __proto__ でもプロトタイプを汚さず own キーになる', () => {
  const p = L.recordAnswer(L.emptyProgress(), '__proto__', true, 1);
  assert.equal(Object.getPrototypeOf(p.quizResults), Object.prototype);
  assert.ok(Object.prototype.hasOwnProperty.call(p.quizResults, '__proto__'));
  assert.equal(p.quizResults.correct, undefined);
  assert.equal(({}).correct, undefined);
});

test('import 値域: passRate / scaled / ts', () => {
  const cur = L.emptyProgress();
  const st = (passRate) => ({ passRate, unlockAll: true });
  const bad = (patch) => assert.ok(L.importProgress(JSON.stringify({ ...cur, ...patch }), cur).error, JSON.stringify(patch));
  const good = (patch) => assert.equal(L.importProgress(JSON.stringify({ ...cur, ...patch }), cur).error, null, JSON.stringify(patch));
  bad({ settings: st(0) });
  bad({ settings: st(0.09) });
  bad({ settings: st(1.01) });
  bad({ settings: st(-1) });
  good({ settings: st(0.1) });
  good({ settings: st(1) });
  const h = { ts: 1, scaled: 730, correct: 35, scored: 50, pass: true };
  bad({ examHistory: [{ ...h, scaled: 99 }] });
  bad({ examHistory: [{ ...h, scaled: 1001 }] });
  good({ examHistory: [{ ...h, scaled: 100 }, { ...h, scaled: 1000 }] });
  bad({ examHistory: [{ ...h, ts: -1 }] });
  bad({ examHistory: [{ ...h, ts: 1e20 }] });
  bad({ examHistory: [{ ...h, ts: null }] });
  bad({ quizResults: { a: { correct: true, ts: -5 } } });
  bad({ quizResults: { a: { correct: true, ts: 1e20 } } });
  good({ quizResults: { a: { correct: true, ts: Date.now() } } });
});

test('EXAM 由来のヘルパー', () => {
  assert.equal(L.examLimitMs(), 130 * 60000);
  assert.equal(L.isExamExpired(1000, 1000 + 130 * 60000 - 1, true), false);
  assert.equal(L.isExamExpired(1000, 1000 + 130 * 60000, true), true);
  assert.equal(L.isExamExpired(1000, 1e15, false), false);
  assert.equal(L.scaledToPercent(100), 0);
  assert.equal(L.scaledToPercent(1000), 100);
  assert.equal(L.scaledToPercent(550), 50);
  assert.equal(L.scaledToPercent(5000), 100);
  assert.equal(L.PASS_RATE.min, 0.1);
  assert.equal(L.PASS_RATE.max, 1);
  assert.equal(L.LOW_TIME_MS, 600000);
});

test('fixPosition: 実在しないレッスン・章不一致は null、正しければそのまま', () => {
  const chOf = (id) => ({ 'c01-l01': 1, 'c02-l01': 2 })[id];
  const withPos = (pos) => ({ ...L.emptyProgress(), position: pos });
  const ok = withPos({ ch: 1, lessonId: 'c01-l01', page: 2 });
  assert.equal(L.fixPosition(ok, chOf), ok);
  assert.equal(L.fixPosition(withPos({ ch: 1, lessonId: 'zzz' }), chOf).position, null);
  assert.equal(L.fixPosition(withPos({ ch: 2, lessonId: 'c01-l01' }), chOf).position, null);
  assert.equal(L.fixPosition(withPos({ ch: 1, lessonId: '__proto__' }), chOf).position, null);
  const nul = withPos(null);
  assert.equal(L.fixPosition(nul, chOf), nul);
  assert.deepEqual(ok.position, { ch: 1, lessonId: 'c01-l01', page: 2 });
});

test('unscoredSummary: 採点対象外の番号・正誤', () => {
  const mk = (id) => ({ id, domain: 1, answer: ['A'], selectCount: 1 });
  const exam = { mc: [mk('a'), mk('b'), mk('c')], unscoredIds: ['b', 'c'] };
  const s = L.unscoredSummary(exam, { b: ['A'], c: ['B'] });
  assert.deepEqual(s, [{ no: 2, id: 'b', correct: true }, { no: 3, id: 'c', correct: false }]);
  assert.deepEqual(L.unscoredSummary({ mc: [], unscoredIds: [] }, {}), []);
  assert.deepEqual(L.unscoredSummary(exam, undefined).map((x) => x.correct), [false, false]);
});

test('chapterPassMessage / chapterEndHint: unlockAll で文言を出し分け', () => {
  const normal = { ...L.emptyProgress(), settings: { ...L.emptyProgress().settings, unlockAll: false } };
  const all = L.emptyProgress();
  assert.match(L.chapterPassMessage(normal, 3), /第3章が開きました/);
  assert.doesNotMatch(L.chapterPassMessage(all, 3), /開きました/);
  assert.match(L.chapterPassMessage(all, 3), /全章開放/);
  assert.match(L.chapterPassMessage(normal, null), /全章の学習が完了/);
  assert.match(L.chapterPassMessage(all, null), /全章の学習が完了/);
  assert.match(L.chapterEndHint(normal), /次章が開きます/);
  assert.doesNotMatch(L.chapterEndHint(all), /次章が開きます/);
});
