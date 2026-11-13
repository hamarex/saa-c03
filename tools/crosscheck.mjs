// 元 md との突き合わせ。validate.mjs とは変換ロジックを共有しない。
// CLI: node tools/crosscheck.mjs [--chapter N]
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';
import { loadData, DEFAULT_MD } from './load-data.mjs';

const pad = (n) => String(n).padStart(2, '0');
const MARKERS = /【(ひっかけ|頻出|比較|注記|注)】/g;
const DOMAIN_TAGS = { セキュア: 1, 弾力性: 2, 高性能: 3, コスト: 4 };

// ---------- 正規化 ----------
function squash(s) { return s.replace(/\s+/g, ' ').trim(); }
function normMd(s) {
  return squash(s.replace(/<!--.*?-->/g, '').replace(/\*\*/g, '').replace(/`/g, '').replace(MARKERS, ''));
}
function plainHtml(h) {
  const t = h.replace(/<span class="badge[^"]*">[^<]*<\/span>/g, '')
    .replace(/<h4>.*?<\/h4>/g, ' ')
    .replace(/<\/?(ul|li|p|br)\s*\/?>/g, ' ')
    .replace(/<[^>]*>/g, '');
  return squash(t.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&amp;/g, '&'));
}

// ---------- md の解析 ----------
function splitChapters(lines) {
  const heads = [];
  lines.forEach((l, i) => {
    const m = /^## 第(\d+)章/.exec(l);
    if (m) heads.push({ no: parseInt(m[1], 10), start: i });
  });
  const nextH2 = (from) => {
    for (let i = from + 1; i < lines.length; i++) if (/^## /.test(lines[i])) return i;
    return lines.length;
  };
  return heads.map((h) => ({ no: h.no, from: h.start, to: nextH2(h.start) }));
}

function parseOxList(lines, from, to) {
  const out = [];
  for (let i = from; i < to; i++) {
    const m = /^- Q(\d+)\.\s*(.*)$/.exec(lines[i]);
    if (!m) continue;
    const ans = /^ {2}- 答え：([○×])/.exec(lines[i + 1] || '');
    const ex = /^ {2}- 解説：(.*)$/.exec(lines[i + 2] || '');
    out.push({ n: +m[1], line: i + 1, text: normMd(m[2]), answer: ans ? ans[1] === '○' : null, explain: ex ? normMd(ex[1]) : null });
  }
  return out;
}

function parseAnswerLetters(s) { return Array.from(new Set(s.match(/[A-F]/g) || [])).sort(); }

function parseMcBlock(lines, i, end) {
  const head = /^- 問(\d+)\.\s*(.*)$/.exec(lines[i]);
  let first = head[2];
  const type = /【(単一選択|複数選択（(\d)つ選択）)】/.exec(first);
  first = first.replace(/【(?:単一選択|複数選択（\d+つ選択）)】/g, '');
  let domain = null;
  first = first.replace(/【(セキュア|弾力性|高性能|コスト)】/g, (m, d) => { domain = DOMAIN_TAGS[d]; return ''; });
  const stem = [first], choices = [], explain = [];
  let answer = null, tip = null, inExp = false, last = null;
  const extend = (text) => {
    const t = normMd(text);
    if (last === 'choice') choices[choices.length - 1] = squash(choices[choices.length - 1] + ' ' + t);
    else if (last === 'explain') explain[explain.length - 1].text = squash(explain[explain.length - 1].text + ' ' + t);
    else if (last === 'tip') tip = squash(tip + ' ' + t);
  };
  for (let k = i + 1; k < end; k++) {
    const l = lines[k];
    let m;
    if ((m = /^ {2}- ([A-F])\.\s*(.*)$/.exec(l)) && !inExp) { choices.push(normMd(m[2])); last = 'choice'; }
    else if (/^ {2}- 答えと解説/.test(l)) { inExp = true; last = null; }
    else if (inExp && (m = /^ {4}- 答え：(.*)$/.exec(l))) { answer = parseAnswerLetters(m[1]); last = null; }
    else if (inExp && (m = /^ {4}- ([A-F])：([○×])\s*(.*)$/.exec(l))) { explain.push({ ok: m[2] === '○', text: normMd(m[3]) }); last = 'explain'; }
    else if (inExp && (m = /^ {4}- 解き方のコツ：(.*)$/.exec(l))) { tip = normMd(m[1]); last = 'tip'; }
    else if ((m = /^ {2,}- (.*)$/.exec(l)) && last) extend(m[1]);
    else if (!inExp && (m = /^ {2}- (.*)$/.exec(l)) && !choices.length) stem.push(m[1]);
  }
  return {
    n: +head[1], line: i + 1, multi: !!(type && type[1].startsWith('複数')), selectCount: type && type[2] ? +type[2] : 1,
    typeFound: !!type, domain, stem: normMd(stem.join(' ')), choices, answer, explain, tip,
  };
}

function parseMcList(lines, from, to) {
  const starts = [];
  for (let i = from; i < to; i++) if (/^- 問\d+\./.test(lines[i])) starts.push(i);
  return starts.map((s, k) => parseMcBlock(lines, s, k + 1 < starts.length ? starts[k + 1] : to));
}

function sectionBounds(lines, from, to) {
  const secs = [];
  for (let i = from; i < to; i++) if (/^### /.test(lines[i])) secs.push(i);
  const find = (re) => { const i = secs.find((s) => re.test(lines[s])); return i === undefined ? null : i; };
  const endOf = (s) => { const k = secs.indexOf(s); return k + 1 < secs.length ? secs[k + 1] : to; };
  const oxS = find(/○×問題/), mcS = find(/シナリオ問題|総仕上げ模擬問題/);
  return {
    ox: oxS === null ? null : [oxS + 1, endOf(oxS)],
    mc: mcS === null ? null : [mcS + 1, endOf(mcS)],
    contentFrom: secs.length ? secs[0] : from,
    contentTo: Math.min(oxS === null ? to : oxS, mcS === null ? to : mcS),
  };
}

// 本文の対象行 [{line, text}]（#### / ### の見出し・空行・コメント専用行を除く）
function contentLines(lines, from, to) {
  const out = [];
  for (let i = from; i < to; i++) {
    const l = lines[i];
    if (!l.trim() || /^#{2,6} /.test(l)) continue;
    out.push({ line: i + 1, text: normMd(l.replace(/^\s*- /, '')) });
  }
  return out;
}

// ---------- 検査 ----------
function ctx() {
  const errors = [], warnings = [];
  return { errors, warnings, err: (m) => errors.push(m), warn: (m) => warnings.push(m) };
}

function eq(c, where, label, got, want) {
  if (got !== want) c.err(`${where}: ${label} が元 md と不一致\n    データ: ${JSON.stringify(got)}\n    元md  : ${JSON.stringify(want)}`);
}

function checkOx(c, ch, mdOx) {
  const no = pad(ch.no);
  if (ch.ox.length !== mdOx.length) c.err(`c${no}: ox 件数 ${ch.ox.length} が元 md の ${mdOx.length} と不一致`);
  const byId = new Map(ch.ox.map((q) => [q.id, q]));
  mdOx.forEach((m) => {
    const id = `c${no}-ox-${pad(m.n)}`;
    const q = byId.get(id);
    if (!q) { c.err(`${id}: データに無い`); return; }
    byId.delete(id);
    if (q.answer !== m.answer) c.err(`${id}: answer がデータ ${q.answer} / 元md ${m.answer}`);
    if (q.src !== m.line) c.err(`${id}: src がデータ ${q.src} / 元md ${m.line}`);
    eq(c, id, 'text', plainHtml(q.text || ''), m.text);
    eq(c, id, 'explain', plainHtml(q.explain || ''), m.explain);
  });
  byId.forEach((q, id) => c.err(`${id}: 元 md に対応する Q が無い`));
}

function checkMcFields(c, id, q, m) {
  if (JSON.stringify(q.answer) !== JSON.stringify(m.answer)) c.err(`${id}: answer がデータ ${JSON.stringify(q.answer)} / 元md ${JSON.stringify(m.answer)}`);
  if (q.selectCount !== m.selectCount) c.err(`${id}: selectCount がデータ ${q.selectCount} / 元md ${m.selectCount}`);
  if (q.src !== m.line) c.err(`${id}: src がデータ ${q.src} / 元md ${m.line}`);
  if (m.domain !== null && q.domain !== m.domain) c.err(`${id}: domain がデータ ${q.domain} / 元md タグ ${m.domain}`);
  if ((q.choices || []).length !== m.choices.length) { c.err(`${id}: 選択肢数がデータ ${(q.choices || []).length} / 元md ${m.choices.length}`); return; }
  eq(c, id, 'stem', plainHtml(q.stem || ''), m.stem);
  m.choices.forEach((t, i) => eq(c, `${id}.choices[${i}]`, 'text', plainHtml(q.choices[i]), t));
  if ((q.choiceExplain || []).length !== m.explain.length) { c.err(`${id}: choiceExplain 数がデータ ${(q.choiceExplain || []).length} / 元md ${m.explain.length}`); return; }
  m.explain.forEach((e, i) => {
    const d = q.choiceExplain[i];
    if (d.ok !== e.ok) c.err(`${id}.choiceExplain[${i}]: ok が元 md と不一致`);
    eq(c, `${id}.choiceExplain[${i}]`, 'text', plainHtml(d.text || ''), e.text);
  });
  eq(c, id, 'tip', plainHtml(q.tip || ''), m.tip);
}

function checkMc(c, ch, mdMc) {
  const no = pad(ch.no);
  if (ch.mc.length !== mdMc.length) c.err(`c${no}: mc 件数 ${ch.mc.length} が元 md の ${mdMc.length} と不一致`);
  const cnt = (arr) => arr.filter((x) => x === true).length;
  const dataMulti = cnt(ch.mc.map((q) => q.selectCount >= 2));
  const mdMulti = cnt(mdMc.map((m) => m.multi));
  if (dataMulti !== mdMulti) c.err(`c${no}: 複数選択の件数 ${dataMulti} が元 md の ${mdMulti} と不一致`);
  const byId = new Map(ch.mc.map((q) => [q.id, q]));
  mdMc.forEach((m) => {
    const id = `c${no}-mc-${pad(m.n)}`;
    const q = byId.get(id);
    if (!q) { c.err(`${id}: データに無い`); return; }
    byId.delete(id);
    checkMcFields(c, id, q, m);
  });
  byId.forEach((q, id) => c.err(`${id}: 元 md に対応する 問 が無い`));
}

function checkPages(c, ch, content) {
  const no = pad(ch.no);
  const owner = new Map();
  const pages = ch.lessons.reduce((a, l) => a.concat(l.pages), []);
  pages.forEach((p) => {
    if (!Array.isArray(p.src)) return;
    content.filter((x) => x.line >= p.src[0] && x.line <= p.src[1]).forEach((x) => {
      if (owner.has(x.line)) c.err(`c${no}: 元 md ${x.line} 行が複数ページ（${owner.get(x.line)} と ${p.id}）に含まれる`);
      owner.set(x.line, p.id);
    });
  });
  content.forEach((x) => { if (!owner.has(x.line)) c.err(`c${no}: 元 md ${x.line} 行がどのページにも無い: ${x.text.slice(0, 30)}`); });
  pages.forEach((p) => {
    if (!Array.isArray(p.src)) return;
    const want = squash(content.filter((x) => x.line >= p.src[0] && x.line <= p.src[1]).map((x) => x.text).join(' '));
    eq(c, p.id, 'ページ本文', plainHtml(p.html || ''), want);
  });
}

function checkNumbers(c, ch, content) {
  const hay = ch.lessons.map((l) => l.pages.map((p) => plainHtml(p.html || '')).join(' ')).join(' ');
  const seen = new Set();
  content.forEach((x) => (x.text.match(/\d[\d,.]*/g) || []).forEach((t) => {
    const tok = t.replace(/[,.]+$/, '');
    if (seen.has(tok)) return;
    seen.add(tok);
    if (!hay.includes(tok)) c.err(`c${pad(ch.no)}: 数字 ${tok}（元 md ${x.line} 行）が章のページに無い`);
  }));
}

function bigrams(s) {
  const t = s.replace(/\s+/g, '');
  const out = new Set();
  for (let i = 0; i + 1 < t.length; i++) out.add(t.slice(i, i + 2));
  return out;
}

function warnOxPlacement(c, ch) {
  const pages = ch.lessons.reduce((a, l) => a.concat(l.pages), []);
  const byId = new Map(ch.ox.map((q) => [q.id, q]));
  pages.forEach((p) => {
    const page = bigrams(plainHtml(p.html || ''));
    (p.oxIds || []).forEach((id) => {
      const q = byId.get(id);
      if (!q) return;
      const b = [...bigrams(plainHtml(q.text || ''))];
      const hit = b.filter((g) => page.has(g)).length;
      if (b.length && hit / b.length < 0.15) c.warn(`${id}: ページ ${p.id} との共通語がほとんど無い（対応付けの疑い）`);
    });
  });
}

function checkChapter(c, ch, range, lines) {
  const no = pad(ch.no);
  const b = sectionBounds(lines, range.from, range.to);
  const mdOx = b.ox ? parseOxList(lines, b.ox[0], b.ox[1]) : [];
  const mdMc = b.mc ? parseMcList(lines, b.mc[0], b.mc[1]) : [];
  if (ch.no === 10 && ch.ox.length !== 0) c.err('c10: ox は0件であるべき');
  if (ch.no === 10 && mdMc.length !== 26) c.err(`c10: 元 md の mc が ${mdMc.length} 件（26件のはず）`);
  mdMc.forEach((m) => { if (!m.typeFound) c.err(`c${no}-mc-${pad(m.n)}: 種別タグが解析できない`); });
  checkOx(c, ch, mdOx);
  checkMc(c, ch, mdMc);
  const content = contentLines(lines, b.contentFrom, b.contentTo);
  checkPages(c, ch, content);
  checkNumbers(c, ch, content);
  warnOxPlacement(c, ch);
}

export function crosscheck(data, mdText, opts = {}) {
  const c = ctx();
  const lines = mdText.split('\n');
  const ranges = splitChapters(lines);
  let chapters = data.chapters;
  if (opts.chapter !== undefined) {
    chapters = chapters.filter((ch) => ch.no === opts.chapter);
    if (!chapters.length) c.err(`第${opts.chapter}章のデータが無い`);
  }
  chapters.forEach((ch) => {
    const r = ranges.find((x) => x.no === ch.no);
    if (!r) { c.err(`c${pad(ch.no)}: 元 md に第${ch.no}章が無い`); return; }
    checkChapter(c, ch, r, lines);
  });
  return { errors: c.errors, warnings: c.warnings };
}

function parseArgs(argv) {
  const i = argv.indexOf('--chapter');
  return i >= 0 ? { chapter: parseInt(argv[i + 1], 10) } : {};
}

function main() {
  const opts = parseArgs(process.argv.slice(2));
  const r = crosscheck(loadData(), fs.readFileSync(DEFAULT_MD, 'utf8'), opts);
  r.warnings.forEach((m) => console.warn('警告: ' + m));
  r.errors.forEach((m) => console.error('エラー: ' + m));
  console.log(`突き合わせ: エラー ${r.errors.length}、警告 ${r.warnings.length}`);
  process.exit(r.errors.length ? 1 : 0);
}

if (process.argv[1] === fileURLToPath(import.meta.url)) main();
