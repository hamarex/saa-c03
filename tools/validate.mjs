// スキーマ検証。CLI: node tools/validate.mjs [--chapter N] [--full]
import { fileURLToPath } from 'node:url';
import { checkHtml, plainLength } from './html-util.mjs';
import { loadDataWithFiles } from './load-data.mjs';

const MD_LINES = 7169;
const MAX_PLAIN = 2000, WARN_PLAIN = 1800, MIN_PLAIN = 400;
const pad = (n) => String(n).padStart(2, '0');
const isStr = (x) => typeof x === 'string' && x.trim() !== '';
const isInt = (x) => Number.isInteger(x);
const isRange = (r, lo = 1, hi = MD_LINES) => Array.isArray(r) && r.length === 2 && isInt(r[0]) && isInt(r[1]) && r[0] >= lo && r[0] <= r[1] && r[1] <= hi;

function collector() {
  const errors = [], warnings = [];
  return { errors, warnings, err: (m) => errors.push(m), warn: (m) => warnings.push(m) };
}

function htmlField(c, where, value) {
  if (!isStr(value)) { c.err(`${where}: 空または文字列でない`); return; }
  checkHtml(value).forEach((m) => c.err(`${where}: ${m}`));
}

function validatePage(c, ch, lesson, page, k, oxIds) {
  const where = page && page.id ? page.id : `${lesson.id} pages[${k}]`;
  const want = `${lesson.id}-p${pad(k + 1)}`;
  if (!page || page.id !== want) c.err(`${where}: ページ id が ${want} ではない（連番・形式）`);
  if (!page) return;
  if (!isStr(page.title)) c.err(`${where}: title が空`);
  htmlField(c, `${where}.html`, page.html);
  if (isStr(page.html)) {
    const n = plainLength(page.html);
    if (n > MAX_PLAIN) c.err(`${where}: プレーン文字数 ${n} > ${MAX_PLAIN}`);
    else if (n > WARN_PLAIN) c.warn(`${where}: プレーン文字数 ${n} > ${WARN_PLAIN}`);
    else if (n < MIN_PLAIN) c.warn(`${where}: ${n} 字（400字未満。統合の検討）`);
  }
  if (!Array.isArray(page.oxIds) || !page.oxIds.every(isStr)) c.err(`${where}: oxIds が文字列配列でない`);
  else page.oxIds.forEach((id) => {
    if (!oxIds.has(id)) c.err(`${where}: oxIds の ${id} が同じ章の ox に無い`);
  });
  if (!isRange(page.src)) c.err(`${where}: src が [from,to] でない`);
  else if (isRange(ch.src) && (page.src[0] < ch.src[0] || page.src[1] > ch.src[1])) c.err(`${where}: src が章の src の外`);
}

function validateLessons(c, ch, oxIds, oxPageCount) {
  const no = pad(ch.no);
  if (!Array.isArray(ch.lessons) || !ch.lessons.length) { c.err(`c${no}: lessons が空`); return; }
  if (ch.lessons.length < 2 || ch.lessons.length > 8) c.warn(`c${no}: レッスン数 ${ch.lessons.length}（2〜8の外）`);
  ch.lessons.forEach((l, i) => {
    const want = `c${no}-l${pad(i + 1)}`;
    if (!l || l.id !== want) c.err(`c${no}: レッスン id が ${want} ではない（実際 ${l && l.id}）`);
    if (!l) return;
    if (!isStr(l.title)) c.err(`${want}: title が空`);
    if (!Array.isArray(l.pages) || !l.pages.length) { c.err(`${want}: pages が空`); return; }
    if (l.pages.length < 3 || l.pages.length > 14) c.warn(`${want}: ページ数 ${l.pages.length}（3〜14の外）`);
    let oxInLesson = 0;
    l.pages.forEach((p, k) => {
      validatePage(c, ch, l, p, k, oxIds);
      if (!p) return;
      (Array.isArray(p.oxIds) ? p.oxIds : []).forEach((id) => {
        oxPageCount.set(id, (oxPageCount.get(id) || 0) + 1);
        oxInLesson++;
      });
      if (Array.isArray(p.oxIds) && p.oxIds.length > 6) c.warn(`${p.id}: ox が ${p.oxIds.length} 問（6問超）`);
    });
    if (!oxInLesson && ch.no !== 10) c.warn(`${want}: ox が0問のレッスン`);
  });
}

function validateOx(c, ch, oxPageCount) {
  const no = pad(ch.no);
  ch.ox.forEach((q, i) => {
    const where = q && q.id ? q.id : `c${no} ox[${i}]`;
    if (!q || !new RegExp(`^c${no}-ox-\\d\\d$`).test(q.id)) c.err(`${where}: ox id の形式が不正`);
    if (!q) return;
    htmlField(c, `${where}.text`, q.text);
    htmlField(c, `${where}.explain`, q.explain);
    if (typeof q.answer !== 'boolean') c.err(`${where}: answer が boolean でない`);
    if (!isInt(q.src)) c.err(`${where}: src が整数でない`);
    const n = oxPageCount.get(q.id) || 0;
    if (n !== 1) c.err(`${where}: ちょうど1ページに属する必要がある（現在 ${n} ページ）`);
  });
}

function validateChoiceExplain(c, where, q) {
  if (!Array.isArray(q.choiceExplain) || q.choiceExplain.length !== q.choices.length) {
    c.err(`${where}: choiceExplain の長さが choices と違う`);
    return;
  }
  q.choiceExplain.forEach((e, i) => {
    const letter = 'ABCDEF'[i];
    if (!e || typeof e.ok !== 'boolean') { c.err(`${where}: choiceExplain[${i}].ok が boolean でない`); return; }
    htmlField(c, `${where}.choiceExplain[${i}].text`, e.text);
    if (Array.isArray(q.answer) && e.ok !== q.answer.includes(letter)) c.err(`${where}: choiceExplain[${i}].ok と answer が不一致（${letter}）`);
  });
}

function validateAnswer(c, where, q) {
  const n = q.choices.length;
  const letters = 'ABCDEF'.slice(0, n);
  const a = q.answer;
  const okArr = Array.isArray(a) && a.length > 0 && a.every((x) => typeof x === 'string' && letters.includes(x) && x.length === 1);
  if (!okArr) { c.err(`${where}: answer が choices 範囲内の文字配列でない`); return; }
  if (a.some((x, i) => i > 0 && a[i - 1] >= x)) c.err(`${where}: answer が昇順・重複なしでない`);
  if (q.selectCount !== a.length || q.selectCount < 1 || q.selectCount > 3) c.err(`${where}: selectCount が answer の個数と一致しない/1〜3の外`);
  if (a.length >= 2 && n < 5) c.warn(`${where}: 複数選択なのに選択肢が ${n} 個`);
  if (a.length === 1 && n !== 4) c.warn(`${where}: 単一選択なのに選択肢が ${n} 個`);
}

function validateMc(c, ch, q, i) {
  const no = pad(ch.no);
  const where = q && q.id ? q.id : `c${no} mc[${i}]`;
  if (!q || !new RegExp(`^c${no}-mc-\\d\\d$`).test(q.id)) c.err(`${where}: mc id の形式が不正`);
  if (!q) return;
  htmlField(c, `${where}.stem`, q.stem);
  const chOk = Array.isArray(q.choices) && q.choices.length >= 4 && q.choices.length <= 6 && q.choices.every(isStr);
  if (!chOk) { c.err(`${where}: choices が 4〜6個の非空文字列でない`); return; }
  q.choices.forEach((t, k) => {
    htmlField(c, `${where}.choices[${k}]`, t);
    if (/^\s*[A-F][.．]/.test(t)) c.err(`${where}: choices[${k}] が A. 形式の接頭辞で始まる`);
  });
  validateAnswer(c, where, q);
  if (![1, 2, 3, 4].includes(q.domain)) c.err(`${where}: domain が 1〜4 でない`);
  validateChoiceExplain(c, where, q);
  htmlField(c, `${where}.tip`, q.tip);
  if (!isInt(q.src)) c.err(`${where}: src が整数でない`);
}

function validateChapter(c, ch, fileInfo) {
  if (!ch) { c.err('章が null'); return; }
  const no = isInt(ch.no) ? pad(ch.no) : '??';
  if (!isInt(ch.no) || ch.no < 1 || ch.no > 10) c.err(`章 no が 1〜10 の整数でない: ${ch.no}`);
  if (!isStr(ch.title)) c.err(`c${no}: title が空`);
  if (!isStr(ch.domainNote)) c.err(`c${no}: domainNote が空`);
  if (!isRange(ch.src)) c.err(`c${no}: src が [from,to]（元mdの範囲内）でない`);
  if (!Array.isArray(ch.ox) || !Array.isArray(ch.mc)) { c.err(`c${no}: ox / mc が配列でない`); return; }
  const oxIds = new Set(ch.ox.map((q) => q && q.id));
  const oxPageCount = new Map();
  validateLessons(c, ch, oxIds, oxPageCount);
  validateOx(c, ch, oxPageCount);
  ch.mc.forEach((q, i) => validateMc(c, ch, q, i));
  if (fileInfo) fileInfo.filter((f) => f.name.startsWith(`data-ch${no}`) && f.lines > 800).forEach((f) => c.warn(`${f.name}: ${f.lines} 行（800行超）`));
}

function collectIds(ch) {
  const ids = [];
  (ch.lessons || []).forEach((l) => { if (!l) return; ids.push(l.id); (l.pages || []).forEach((p) => { if (p) ids.push(p.id); }); });
  (ch.ox || []).forEach((q) => { if (q) ids.push(q.id); });
  (ch.mc || []).forEach((q) => { if (q) ids.push(q.id); });
  return ids;
}

function validateFull(c, chapters) {
  const seen = new Set();
  chapters = chapters.filter(Boolean);
  chapters.forEach((ch) => collectIds(ch).forEach((id) => {
    if (seen.has(id)) c.err(`ID の重複: ${id}`);
    seen.add(id);
  }));
  const nos = new Set(chapters.map((ch) => ch.no));
  for (let n = 1; n <= 10; n++) if (!nos.has(n)) c.err(`第${n}章が無い`);
  const perDomain = { 1: 0, 2: 0, 3: 0, 4: 0 };
  chapters.forEach((ch) => (ch.mc || []).forEach((q) => { if (q && perDomain[q.domain] !== undefined) perDomain[q.domain]++; }));
  Object.entries(perDomain).forEach(([d, n]) => { if (n < 25) c.err(`domain ${d} の mc が ${n} 問（25問以上必要）`); });
  const pages = chapters.reduce((s, ch) => s + (ch.lessons || []).reduce((t, l) => t + ((l && l.pages) || []).length, 0), 0);
  if (pages < 200 || pages > 320) c.warn(`総ページ数 ${pages}（200〜320の外）`);
}

export function validateData(data, opts = {}) {
  const c = collector();
  const all = (data && Array.isArray(data.chapters)) ? data.chapters : null;
  if (!all) { c.err('data.chapters が配列でない'); return { errors: c.errors, warnings: c.warnings }; }
  const nosSeen = new Set();
  all.forEach((ch) => {
    if (!ch) return;
    if (nosSeen.has(ch.no)) c.err(`章 no の重複: ${ch.no}`);
    nosSeen.add(ch.no);
  });
  let target = all;
  if (opts.chapter !== undefined) {
    target = all.filter((ch) => ch && ch.no === opts.chapter);
    if (!target.length) c.err(`第${opts.chapter}章のデータが無い`);
  }
  target.forEach((ch) => validateChapter(c, ch, opts.files));
  if (opts.full) validateFull(c, all);
  return { errors: c.errors, warnings: c.warnings };
}

export function parseArgs(argv) {
  const opts = {};
  for (let i = 0; i < argv.length; i++) {
    if (argv[i] === '--full') opts.full = true;
    else if (argv[i] === '--chapter') opts.chapter = parseInt(argv[++i], 10);
  }
  return opts;
}

function main() {
  const opts = parseArgs(process.argv.slice(2));
  const { chapters, files } = loadDataWithFiles();
  const r = validateData({ chapters }, { ...opts, files });
  r.warnings.forEach((m) => console.warn('警告: ' + m));
  r.errors.forEach((m) => console.error('エラー: ' + m));
  console.log(`章 ${chapters.length} 件を検査: エラー ${r.errors.length}、警告 ${r.warnings.length}`);
  process.exit(r.errors.length ? 1 : 0);
}

if (process.argv[1] === fileURLToPath(import.meta.url)) main();
