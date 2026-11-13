// validate.mjs 用の HTML 検査ユーティリティ（crosscheck.mjs とは共有しない）
export const ALLOWED_TAGS = new Set(['ul', 'li', 'p', 'b', 'span', 'code', 'br', 'h4']);
export const ALLOWED_CLASSES = new Set(['key', 'trap', 'badge', 'b-freq', 'b-cmp', 'b-trap', 'b-note']);
const VOID_TAGS = new Set(['br']);
const TAG_RE = /<(\/?)([a-zA-Z][a-zA-Z0-9]*)([^>]*)>/g;

function checkAttrs(tag, attrs, errs) {
  const rest = attrs.replace(/\/\s*$/, '').trim();
  if (!rest) return;
  const m = /^class="([^"]*)"$/.exec(rest);
  if (!m) { errs.push(`<${tag}> に許可されない属性: ${rest}`); return; }
  m[1].split(/\s+/).filter(Boolean).forEach((c) => {
    if (!ALLOWED_CLASSES.has(c)) errs.push(`許可されない class: ${c}`);
  });
}

// タグ・属性・対応を検査して、エラー文字列の配列を返す
export function checkHtml(html) {
  const errs = [];
  const stack = [];
  const text = String(html);
  for (const m of text.matchAll(TAG_RE)) {
    const closing = m[1] === '/';
    const tag = m[2].toLowerCase();
    if (!ALLOWED_TAGS.has(tag)) { errs.push(`許可されないタグ: <${tag}>`); continue; }
    if (closing) {
      if (stack.pop() !== tag) errs.push(`タグの対応が不正: </${tag}>`);
    } else {
      checkAttrs(tag, m[3], errs);
      if (!VOID_TAGS.has(tag)) stack.push(tag);
    }
  }
  if (stack.length) errs.push(`閉じていないタグ: ${stack.join(',')}`);
  if (/<[^>]*$/.test(text.replace(TAG_RE, ''))) errs.push('不完全な < があります（エスケープされていない）');
  return errs;
}

export function decodeEntities(s) {
  return s.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&amp;/g, '&');
}

export function plainLength(html) {
  return decodeEntities(String(html).replace(/<[^>]*>/g, '')).length;
}
