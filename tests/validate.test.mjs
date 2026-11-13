import test from 'node:test';
import assert from 'node:assert/strict';
import { validateData, parseArgs } from '../tools/validate.mjs';
import { checkHtml } from '../tools/html-util.mjs';
import { makeData, mutated } from './fixture.mjs';

const errorsOf = (d, o) => validateData(d, o).errors;
const expectErr = (d, re, o) => assert.ok(errorsOf(d, o).some((e) => re.test(e)), `期待したエラー ${re} が出ない: ${errorsOf(d, o).join(' | ')}`);

test('正しい最小データはエラー 0', () => {
  assert.deepEqual(errorsOf(makeData()), []);
  assert.deepEqual(errorsOf(makeData(), { chapter: 1 }), []);
});

test('data 自体が不正', () => {
  assert.ok(errorsOf(null).length);
  assert.ok(errorsOf({ chapters: 1 }).length);
  expectErr(makeData(), /第5章のデータが無い/, { chapter: 5 });
});

test('章の検査', () => {
  expectErr(mutated((c) => { c.no = 11; }), /1〜10/);
  expectErr(mutated((c) => { c.title = ''; }), /title/);
  expectErr(mutated((c) => { c.domainNote = ' '; }), /domainNote/);
  expectErr(mutated((c) => { c.src = [5, 1]; }), /src/);
  expectErr(mutated((c) => { c.lessons = []; }), /lessons/);
  expectErr(mutated((c) => { c.ox = null; }), /配列でない/);
  const dup = makeData(); dup.chapters.push(structuredClone(dup.chapters[0]));
  assert.ok(errorsOf(dup).some((e) => /重複/.test(e)));
});

test('レッスン・ページの検査', () => {
  expectErr(mutated((c) => { c.lessons[0].id = 'c01-l02'; }), /レッスン id/);
  expectErr(mutated((c) => { c.lessons[0].pages[0].id = 'c01-l01-p02'; }), /ページ id/);
  expectErr(mutated((c) => { c.lessons[0].pages[0].title = ''; }), /title/);
  expectErr(mutated((c) => { c.lessons[0].pages[0].html = ''; }), /html/);
  expectErr(mutated((c) => { c.lessons[0].pages[0].html = '<ul><li>x</ul>'; }), /対応/);
  expectErr(mutated((c) => { c.lessons[0].pages[0].html = '<script>x</script>'; }), /許可されないタグ/);
  expectErr(mutated((c) => { c.lessons[0].pages[0].html = '<b onclick="x">a</b>'; }), /許可されない属性/);
  expectErr(mutated((c) => { c.lessons[0].pages[0].html = '<b class="evil">a</b>'; }), /許可されない class/);
  expectErr(mutated((c) => { c.lessons[0].pages[0].html = '<p>' + 'あ'.repeat(2001) + '</p>'; }), /2000/);
  expectErr(mutated((c) => { c.lessons[0].pages[0].oxIds = ['c01-ox-99']; }), /ox に無い/);
  expectErr(mutated((c) => { c.lessons[0].pages[0].oxIds = 'x'; }), /oxIds/);
  expectErr(mutated((c) => { c.lessons[0].pages[0].src = [1]; }), /src/);
  expectErr(mutated((c) => { c.lessons[0].pages[0].src = [1, 100]; }), /章の src の外/);
  expectErr(mutated((c) => { c.lessons[0].pages = []; }), /pages が空/);
});

test('警告: 1800 字超・400 字未満・ox 多すぎ・ox ゼロのレッスン', () => {
  const w = (d) => validateData(d).warnings.join('|');
  assert.match(w(mutated((c) => { c.lessons[0].pages[0].html = '<p>' + 'あ'.repeat(1900) + '</p>'; })), /1800/);
  assert.match(w(makeData()), /400字未満/);
  assert.match(w(mutated((c) => { c.lessons[0].pages[0].oxIds = []; c.ox = []; })), /ox が0問/);
  assert.doesNotMatch(w(mutated((c) => { c.no = 10; c.lessons[0].id = 'c10-l01'; c.lessons[0].pages[0].id = 'c10-l01-p01'; c.lessons[0].pages[0].oxIds = []; c.ox = []; c.mc.forEach((q, i) => { q.id = `c10-mc-0${i + 1}`; }); })), /ox が0問/);
  const many = mutated((c) => {
    c.ox = Array.from({ length: 7 }, (_, i) => ({ id: `c01-ox-0${i + 1}`, text: 't', answer: true, explain: 'e', src: i + 1 }));
    c.lessons[0].pages[0].oxIds = c.ox.map((q) => q.id);
  });
  assert.match(w(many), /6問超/);
});

test('ox の検査', () => {
  expectErr(mutated((c) => { c.ox[0].id = 'c01-ox-1'; }), /ox id/);
  expectErr(mutated((c) => { c.ox[0].text = ''; }), /text/);
  expectErr(mutated((c) => { c.ox[0].answer = 'true'; }), /boolean/);
  expectErr(mutated((c) => { c.ox[0].src = 'x'; }), /src/);
  expectErr(mutated((c) => { c.lessons[0].pages[0].oxIds = []; }), /ちょうど1ページ/);
  expectErr(mutated((c) => {
    c.lessons[0].pages.push({ ...c.lessons[0].pages[0], id: 'c01-l01-p02' });
  }), /現在 2 ページ/);
});

test('mc の検査', () => {
  expectErr(mutated((c) => { c.mc[0].id = 'c01-mc-1'; }), /mc id/);
  expectErr(mutated((c) => { c.mc[0].stem = ''; }), /stem/);
  expectErr(mutated((c) => { c.mc[0].choices = ['a', 'b']; }), /choices が/);
  expectErr(mutated((c) => { c.mc[0].choices[0] = 'A. 選択肢あ'; }), /接頭辞/);
  expectErr(mutated((c) => { c.mc[0].answer = ['E']; }), /choices 範囲内/);
  expectErr(mutated((c) => { c.mc[1].answer = ['C', 'A']; c.mc[1].choiceExplain.forEach((e, i) => { e.ok = i === 0 || i === 2; }); }), /昇順/);
  expectErr(mutated((c) => { c.mc[1].selectCount = 1; }), /selectCount/);
  expectErr(mutated((c) => { c.mc[0].domain = 5; }), /domain/);
  expectErr(mutated((c) => { c.mc[0].choiceExplain.pop(); }), /長さ/);
  expectErr(mutated((c) => { c.mc[0].choiceExplain[0].ok = true; }), /不一致/);
  expectErr(mutated((c) => { c.mc[0].choiceExplain[0].ok = 'x'; }), /boolean/);
  expectErr(mutated((c) => { c.mc[0].choiceExplain[0].text = ''; }), /text/);
  expectErr(mutated((c) => { c.mc[0].tip = ''; }), /tip/);
  expectErr(mutated((c) => { c.mc[0].src = null; }), /src/);
  expectErr(mutated((c) => { c.mc[0].stem = '<img src=x>'; }), /許可されないタグ/);
});

test('mc の警告: 複数選択で5個未満 / 単一で4個以外', () => {
  const w = (d) => validateData(d).warnings.join('|');
  assert.match(w(mutated((c) => { const q = c.mc[1]; q.choices.pop(); q.choiceExplain.pop(); })), /複数選択なのに/);
  assert.match(w(mutated((c) => { const q = c.mc[0]; q.choices.push('x'); q.choiceExplain.push({ ok: false, text: 'y' }); })), /単一選択なのに/);
});

test('--full: 全章・ID 重複・domain 数', () => {
  const r = validateData(makeData(), { full: true }).errors.join('|');
  assert.match(r, /第2章が無い/);
  assert.match(r, /domain 2 の mc/);
  const dup = mutated((c) => { c.mc[1].id = 'c01-mc-01'; });
  assert.ok(errorsOf(dup, { full: true }).some((e) => /ID の重複/.test(e)));
  assert.match(validateData(makeData(), { full: true }).warnings.join('|'), /総ページ数/);
});

test('800 行超の警告と parseArgs', () => {
  const w = validateData(makeData(), { files: [{ name: 'data-ch01.js', lines: 900 }] }).warnings.join('|');
  assert.match(w, /800行超/);
  assert.deepEqual(parseArgs(['--chapter', '3', '--full']), { chapter: 3, full: true });
  assert.deepEqual(parseArgs([]), {});
});

test('checkHtml: 正常と異常', () => {
  assert.deepEqual(checkHtml('<ul><li>a<br>b</li></ul><p><code>x</code></p><h4>t</h4>'), []);
  assert.deepEqual(checkHtml('1 &lt; 2'), []);
  assert.ok(checkHtml('a < b').length);
  assert.ok(checkHtml('<b>').length);
});

test('null 要素でも例外を投げずエラーを記録する', () => {
  const noThrow = (d, re) => { let e; assert.doesNotThrow(() => { e = errorsOf(d); }); assert.ok(e.length, 'エラーが出ない'); if (re) assert.ok(e.some((m) => re.test(m)), e.join(' | ')); };
  noThrow(mutated((c) => { c.ox.push(null); }), /ox id/);
  noThrow(mutated((c) => { c.mc.push(null); }), /mc id/);
  noThrow(mutated((c) => { c.lessons.push(null); }), /レッスン id/);
  noThrow(mutated((c) => { c.lessons[0].pages.push(null); }), /ページ id/);
  noThrow(mutated((c) => { c.lessons[0].pages = [null]; }));
  const d = makeData(); d.chapters.push(null);
  noThrow(d);
});
