import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { loadDataWithFiles, listDataFiles, DEFAULT_MD } from '../tools/load-data.mjs';
import { validateData } from '../tools/validate.mjs';
import { crosscheck } from '../tools/crosscheck.mjs';

const { chapters, files } = loadDataWithFiles();
const data = { chapters };
const present = chapters.map((c) => c.no).sort((a, b) => a - b);
const complete = present.length === 10 && present.every((n, i) => n === i + 1);

test('data.js が window だけで読み込める', () => {
  assert.ok(Array.isArray(chapters));
  assert.equal(files.length, listDataFiles().length);
});

test('存在する章はスキーマ検証でエラー 0', () => {
  const r = validateData(data, { files });
  assert.deepEqual(r.errors, []);
});

test('存在する章は元 md と突き合わせてエラー 0', () => {
  const r = crosscheck(data, fs.readFileSync(DEFAULT_MD, 'utf8'));
  assert.deepEqual(r.errors, []);
});

test('ID の重複なし', () => {
  const ids = [];
  chapters.forEach((c) => {
    c.lessons.forEach((l) => { ids.push(l.id); l.pages.forEach((p) => ids.push(p.id)); });
    c.ox.forEach((q) => ids.push(q.id));
    c.mc.forEach((q) => ids.push(q.id));
  });
  assert.equal(new Set(ids).size, ids.length);
});

test('全10章が揃ったら全体検証と件数（ox 246 / mc 171 / 複数 33）', { skip: !complete && '全章が揃うまでスキップ' }, () => {
  assert.deepEqual(validateData(data, { full: true, files }).errors, []);
  const sum = (f) => chapters.reduce((s, c) => s + f(c), 0);
  assert.equal(sum((c) => c.ox.length), 246);
  assert.equal(sum((c) => c.mc.length), 171);
  assert.equal(sum((c) => c.mc.filter((q) => q.selectCount >= 2).length), 33);
});
