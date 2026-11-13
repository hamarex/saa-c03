import test from 'node:test';
import assert from 'node:assert/strict';
import { crosscheck } from '../tools/crosscheck.mjs';
import { MD, makeData, mutated } from './fixture.mjs';

const run = (d, o) => crosscheck(d, MD, o);
const expectErr = (d, re) => {
  const e = run(d).errors;
  assert.ok(e.some((m) => re.test(m)), `期待 ${re}: ${e.join(' | ')}`);
};

test('正しいデータはエラー 0', () => {
  const r = run(makeData());
  assert.deepEqual(r.errors, []);
  assert.deepEqual(run(makeData(), { chapter: 1 }).errors, []);
});

test('章が無い', () => {
  assert.ok(run(makeData(), { chapter: 3 }).errors.length);
  const d = makeData(); d.chapters[0].no = 2;
  assert.ok(run(d).errors.some((m) => /第2章が無い/.test(m)));
});

test('ox: 答え違い・テキスト改変・src・件数・余分', () => {
  expectErr(mutated((c) => { c.ox[0].answer = false; }), /answer/);
  expectErr(mutated((c) => { c.ox[0].text = '文章1！'; }), /text が元 md と不一致/);
  expectErr(mutated((c) => { c.ox[0].explain = '理由'; }), /explain/);
  expectErr(mutated((c) => { c.ox[0].src = 9; }), /src/);
  expectErr(mutated((c) => { c.ox = []; c.lessons[0].pages[0].oxIds = []; }), /ox 件数/);
  expectErr(mutated((c) => { c.ox[0].id = 'c01-ox-02'; }), /データに無い|元 md に対応/);
});

test('mc: 答え・selectCount・選択肢数・テキスト・解説・コツ・src', () => {
  expectErr(mutated((c) => { c.mc[0].answer = ['C']; }), /answer/);
  expectErr(mutated((c) => { c.mc[1].selectCount = 1; }), /selectCount/);
  expectErr(mutated((c) => { c.mc[0].choices.pop(); }), /選択肢数/);
  expectErr(mutated((c) => { c.mc[0].choices[2] = '違う'; }), /choices\[2\]/);
  expectErr(mutated((c) => { c.mc[0].stem = '問題文。'; }), /stem/);
  expectErr(mutated((c) => { c.mc[0].choiceExplain[1].text = '改変'; }), /choiceExplain\[1\]/);
  expectErr(mutated((c) => { c.mc[0].choiceExplain[1].ok = false; }), /ok が元 md/);
  expectErr(mutated((c) => { c.mc[0].choiceExplain.pop(); }), /choiceExplain 数/);
  expectErr(mutated((c) => { c.mc[0].tip = 'ちがう'; }), /tip/);
  expectErr(mutated((c) => { c.mc[1].tip = 'コツ2'; }), /tip/);
  expectErr(mutated((c) => { c.mc[0].src = 13; }), /src/);
  expectErr(mutated((c) => { c.mc.pop(); }), /mc 件数/);
  expectErr(mutated((c) => { c.mc[0].id = 'c01-mc-09'; }), /元 md に対応する 問/);
});

test('ページ: 行の抜け・重複・本文改変・数字', () => {
  expectErr(mutated((c) => { c.lessons[0].pages[0].src = [5, 5]; c.lessons[0].pages[0].html = '<ul><li><b class="key">太字</b>の項目 3つ</li></ul>'; }), /6 行がどのページにも無い/);
  expectErr(mutated((c) => { c.lessons[0].pages.push({ id: 'c01-l01-p02', title: 'x', html: '<p>x</p>', oxIds: [], src: [6, 6] }); }), /複数ページ/);
  expectErr(mutated((c) => { c.lessons[0].pages[0].html = c.lessons[0].pages[0].html.replace('90日', '80日'); }), /ページ本文/);
  expectErr(mutated((c) => { c.lessons[0].pages[0].html = c.lessons[0].pages[0].html.replace('3つ', '三つ'); }), /数字 3/);
});

test('警告: ox のページ対応が怪しい', () => {
  const d = mutated((c) => { c.ox[0].text = 'まったく無関係ななにか'; });
  const r = crosscheck(d, MD.replace('文章1。', 'まったく無関係ななにか'));
  assert.ok(r.warnings.some((m) => /共通語/.test(m)));
});

test('第10章: ドメインタグと ox 0 件', () => {
  const md10 = [
    '## 第10章 総仕上げ', '### 1. 逆引き', '#### 見出し', '- 項目', '### 5. 総仕上げ模擬問題',
    '- 問1. 【単一選択】【弾力性】要件。', '  - A. a', '  - B. b', '  - C. c', '  - D. d',
    '  - 答えと解説', '    - 答え：**A**', '    - A：○ ra', '    - B：× rb', '    - C：× rc', '    - D：× rd', '    - 解き方のコツ：t',
  ].join('\n');
  const mk = (domain) => ({
    chapters: [{
      no: 10, title: 't', domainNote: 'd', src: [1, 17], ox: [],
      lessons: [{ id: 'c10-l01', title: 'l', pages: [{ id: 'c10-l01-p01', title: '見出し', html: '<ul><li>項目</li></ul>', oxIds: [], src: [4, 4] }] }],
      mc: [{
        id: 'c10-mc-01', stem: '要件。', choices: ['a', 'b', 'c', 'd'], answer: ['A'], selectCount: 1, domain,
        choiceExplain: [{ ok: true, text: 'ra' }, { ok: false, text: 'rb' }, { ok: false, text: 'rc' }, { ok: false, text: 'rd' }], tip: 't', src: 6,
      }],
    }],
  });
  const good = crosscheck(mk(2), md10).errors.filter((m) => !/26件/.test(m));
  assert.deepEqual(good, []);
  assert.ok(crosscheck(mk(3), md10).errors.some((m) => /domain/.test(m)));
  const withOx = mk(2); withOx.chapters[0].ox = [{ id: 'c10-ox-01' }];
  assert.ok(crosscheck(withOx, md10).errors.some((m) => /ox は0件/.test(m)));
});
