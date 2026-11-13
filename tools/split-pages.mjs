// ページを「重要用語（<b class="key">）3〜6個」ごとに分割して app/data.js の lessons ブロックを書き換える。
// CLI: node tools/split-pages.mjs [--write]   （--write なしはドライラン）
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';
import { loadData, DEFAULT_APP_DIR, DEFAULT_MD } from './load-data.mjs';

export const KEY_MAX = 6;
export const KEY_MIN = 3;
const KEY_RE = /<b class="key">/g;
export const countKeys = (html) => (String(html).match(KEY_RE) || []).length;

// ---------- HTML → 行（li / p / h4）の木 ----------
function tokenize(html) {
  const out = [];
  const re = /<(\/?)([a-zA-Z0-9]+)([^>]*)>/g;
  let last = 0, m;
  while ((m = re.exec(html))) {
    if (m.index > last) out.push({ t: 'text', s: html.slice(last, m.index) });
    out.push({ t: m[1] ? 'close' : 'open', tag: m[2], s: m[0] });
    last = re.lastIndex;
  }
  if (last < html.length) out.push({ t: 'text', s: html.slice(last) });
  return out;
}

// li の自分自身の本文（入れ子の ul の手前まで）を読む。i は li の開始タグの次
function readInline(tk, i, stopTags) {
  let s = '', depth = 0;
  for (; i < tk.length; i++) {
    const x = tk[i];
    if (depth === 0 && ((x.t === 'open' && x.tag === 'ul') || (x.t === 'close' && stopTags.includes(x.tag)))) break;
    if (x.t === 'open' && x.tag !== 'br') depth++;
    if (x.t === 'close') depth--;
    s += x.s;
  }
  return { s, i };
}

function parseList(tk, i) { // tk[i] は <ul> の次
  const items = [];
  while (tk[i] && !(tk[i].t === 'close' && tk[i].tag === 'ul')) {
    if (!(tk[i].t === 'open' && tk[i].tag === 'li')) throw new Error('li 以外が ul 直下にある: ' + tk[i].s);
    const r = readInline(tk, i + 1, ['li']);
    const node = { kind: 'li', html: r.s, children: [] };
    i = r.i;
    if (tk[i].t === 'open' && tk[i].tag === 'ul') {
      const sub = parseList(tk, i + 1);
      node.children = sub.items; i = sub.i + 1; // </ul> の次
    }
    if (!(tk[i] && tk[i].t === 'close' && tk[i].tag === 'li')) throw new Error('</li> が無い');
    i++; items.push(node);
  }
  return { items, i };
}

export function parsePage(html) {
  const tk = tokenize(html), roots = [];
  let i = 0;
  while (i < tk.length) {
    const x = tk[i];
    if (x.t === 'open' && x.tag === 'ul') {
      const r = parseList(tk, i + 1); roots.push(...r.items); i = r.i + 1;
    } else if (x.t === 'open' && (x.tag === 'p' || x.tag === 'h4')) {
      const r = readInline(tk, i + 1, [x.tag]);
      roots.push({ kind: x.tag, html: r.s, children: [] }); i = r.i + 1;
    } else throw new Error('想定外のトップレベル要素: ' + x.s);
  }
  return roots;
}

// ---------- 単位（分割してよい塊）の作成 ----------
const own = (n) => countKeys(n.html);
const total = (n) => own(n) + n.children.reduce((a, c) => a + total(c), 0);
function flatten(n, depth, out = []) {
  out.push({ kind: n.kind, html: n.html, depth, keys: own(n) });
  n.children.forEach((c) => flatten(c, depth + 1, out));
  return out;
}
function unitsOf(nodes, depth) {
  const out = [];
  nodes.forEach((n) => {
    if (total(n) <= KEY_MAX || !n.children.length) { out.push({ lines: flatten(n, depth), keys: total(n) }); return; }
    const sub = unitsOf(n.children, depth + 1);
    const lead = { kind: n.kind, html: n.html, depth, keys: own(n) };
    sub[0] = { lines: [lead, ...sub[0].lines], keys: lead.keys + sub[0].keys };
    out.push(...sub);
  });
  return out;
}
function topUnits(roots) {
  const out = [];
  let carry = null; // h4 は次の単位に結合
  roots.forEach((n) => {
    const us = unitsOf([n], 0);
    if (carry) { us[0] = { lines: [...carry.lines, ...us[0].lines], keys: carry.keys + us[0].keys }; carry = null; }
    if (n.kind === 'h4' && us.length === 1) carry = us.pop();
    out.push(...us);
  });
  if (carry) out.push(carry);
  return out;
}

// ---------- 詰め込み ----------
export function pack(units) {
  const chunks = [];
  units.forEach((u) => {
    const cur = chunks[chunks.length - 1];
    if (cur && cur.keys + u.keys <= KEY_MAX) { cur.units.push(u); cur.keys += u.keys; }
    else chunks.push({ units: [u], keys: u.keys });
  });
  for (let k = chunks.length - 1; k > 0; k--) { // 末尾が少なすぎれば前から借りる
    const last = chunks[k], prev = chunks[k - 1];
    while (last.keys < KEY_MIN && prev.units.length > 1) {
      const u = prev.units[prev.units.length - 1];
      if (prev.keys - u.keys < KEY_MIN || last.keys + u.keys > KEY_MAX) break;
      prev.units.pop(); prev.keys -= u.keys; last.units.unshift(u); last.keys += u.keys;
    }
  }
  return chunks.map((c) => ({ lines: c.units.flatMap((u) => u.lines), keys: c.keys }));
}

// ---------- 行 → HTML ----------
export function serialize(lines) {
  let out = '', open = 0, prev = -1;
  lines.forEach((l) => {
    if (l.kind !== 'li') {
      while (open > 0) { out += '</li></ul>'; open--; }
      out += `<${l.kind}>${l.html}</${l.kind}>`; prev = -1; return;
    }
    const d = Math.min(l.depth, prev + 1), target = d + 1;
    if (open === 0) { out += '<ul>'; open = 1; }
    else {
      while (open > target) { out += '</li></ul>'; open--; }
      if (open === target) out += '</li>';
    }
    while (open < target) { out += '<ul>'; open++; }
    out += `<li>${l.html}`; prev = d;
  });
  while (open > 0) { out += '</li></ul>'; open--; }
  return out;
}

// ---------- ox の再配置（本文との2文字連続一致が最大のチャンク） ----------
const plain = (h) => String(h).replace(/<[^>]*>/g, '').replace(/&lt;|&gt;|&quot;|&amp;/g, ' ');
const grams = (s) => { const g = new Set(); const t = s.replace(/\s+/g, ''); for (let i = 0; i + 1 < t.length; i++) g.add(t.slice(i, i + 2)); return g; };
function pickChunk(oxq, chunkTexts) {
  const g = grams(plain(oxq.text) + plain(oxq.explain));
  let best = 0, bestScore = -1;
  chunkTexts.forEach((t, k) => {
    const cg = grams(t); let s = 0; g.forEach((x) => { if (cg.has(x)) s++; });
    if (s > bestScore) { bestScore = s; best = k; }
  });
  return best;
}

const pad = (n) => String(n).padStart(2, '0');
const ROMAN = '①②③④⑤⑥⑦⑧⑨⑩⑪⑫⑬⑭⑮⑯⑰⑱⑲⑳';
const numLabel = (k) => (k < ROMAN.length ? ROMAN[k] : `(${k + 1})`);

// md の本文行（クロスチェックと同じ定義）
function contentLinesIn(mdLines, from, to) {
  const out = [];
  for (let n = from; n <= to; n++) {
    const l = mdLines[n - 1];
    if (l === undefined || !l.trim() || /^#{2,6} /.test(l)) continue;
    out.push(n);
  }
  return out;
}

export function splitPage(page, mdLines) {
  const chunks = pack(topUnits(parsePage(page.html)));
  if (chunks.length <= 1) return [{ ...page }];
  const mdNums = contentLinesIn(mdLines, page.src[0], page.src[1]);
  const textCount = chunks.reduce((a, c) => a + c.lines.filter((l) => l.kind !== 'h4').length, 0);
  if (textCount !== mdNums.length) throw new Error(`${page.id}: html の行数 ${textCount} と md の本文行数 ${mdNums.length} が不一致`);
  let cursor = 0;
  return chunks.map((c, k) => {
    const n = c.lines.filter((l) => l.kind !== 'h4').length;
    const first = mdNums[cursor], last = mdNums[cursor + n - 1];
    cursor += n;
    return {
      title: `${page.title} ${numLabel(k)}`,
      html: serialize(c.lines),
      oxIds: [],
      src: [k === 0 ? page.src[0] : first, k === chunks.length - 1 ? page.src[1] : last],
    };
  });
}

export function splitChapter(ch, mdLines) {
  const oxById = new Map(ch.ox.map((o) => [o.id, o]));
  return ch.lessons.map((l) => {
    const pages = [];
    l.pages.forEach((p) => {
      const parts = splitPage(p, mdLines);
      if (parts.length === 1) { pages.push({ ...p }); return; }
      const texts = parts.map((x) => plain(x.html));
      (p.oxIds || []).forEach((id) => { parts[pickChunk(oxById.get(id), texts)].oxIds.push(id); });
      pages.push(...parts);
    });
    return { ...l, pages: pages.map((p, i) => ({ ...p, id: `${l.id}-p${pad(i + 1)}` })) };
  });
}

// ---------- data.js の lessons ブロックを差し替え ----------
const q = (s) => JSON.stringify(s);
function emitLessons(lessons) {
  const body = lessons.map((l) => {
    const pages = l.pages.map((p) => [
      '      {', `        id: ${q(p.id)},`, `        title: ${q(p.title)},`, `        html: ${q(p.html)},`,
      `        oxIds: [${p.oxIds.map(q).join(',')}],`, `        src: [${p.src[0]},${p.src[1]}]`, '      }',
    ].join('\n')).join(',\n');
    return `    { id: ${q(l.id)}, title: ${q(l.title)}, pages: [\n${pages},\n    ] }`;
  }).join(',\n');
  return `  lessons: [\n${body},\n  ],`;
}

export function rewriteDataJs(text, newLessonsByChapter) {
  const lines = text.split('\n'), out = [];
  let ch = 0;
  for (let i = 0; i < lines.length; i++) {
    const m = /^  no: (\d+),/.exec(lines[i]);
    if (m) ch = +m[1];
    if (lines[i] === '  lessons: [') {
      let j = i; while (lines[j] !== '  ],') j++;
      out.push(...emitLessons(newLessonsByChapter.get(ch)).split('\n')); i = j; continue;
    }
    out.push(lines[i]);
  }
  return out.join('\n');
}

function main() {
  const write = process.argv.includes('--write');
  const { chapters } = loadData();
  const mdLines = fs.readFileSync(DEFAULT_MD, 'utf8').split('\n');
  const next = new Map(chapters.map((ch) => [ch.no, splitChapter(ch, mdLines)]));
  const pages = [...next.values()].flatMap((ls) => ls.flatMap((l) => l.pages));
  const hist = {}; pages.forEach((p) => { const k = countKeys(p.html); hist[k] = (hist[k] || 0) + 1; });
  console.log(`ページ数 ${pages.length}  重要用語数の分布`, JSON.stringify(hist));
  if (!write) return;
  const file = `${DEFAULT_APP_DIR}/data.js`;
  fs.writeFileSync(file, rewriteDataJs(fs.readFileSync(file, 'utf8'), next));
  console.log('app/data.js を書き換えました');
}

if (process.argv[1] === fileURLToPath(import.meta.url)) main();
