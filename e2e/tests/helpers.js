import { expect } from '@playwright/test';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
export const APP_URL = pathToFileURL(path.resolve(here, '../../app/index.html')).href;
export const STORAGE_KEY = 'saa-c03.progress.v1';

// コンソールエラー・未捕捉例外を収集し、dialog（prompt/confirm）は既定で受け入れる
export function watchPage(page) {
  const errors = [];
  page.on('console', (msg) => { if (msg.type() === 'error') errors.push('console: ' + msg.text()); });
  page.on('pageerror', (err) => { errors.push('pageerror: ' + err.message); });
  page.on('dialog', (dialog) => { dialog.accept().catch(() => {}); });
  return errors;
}

export async function openApp(page) {
  await page.goto(APP_URL);
  await expect(page.locator('#app')).not.toBeEmpty();
}

export const act = (page, name) => page.locator('[data-act="' + name + '"]');
export const homeHeading = (page) => page.getByRole('heading', { level: 1, name: 'AWS SAA-C03 学習アプリ' });

export async function goHome(page) {
  await act(page, 'home').first().click();
  await expect(homeHeading(page)).toBeVisible();
}

// 指定章の mc（表示順＝データ順）を取得
export function chapterMc(page, no) {
  return page.evaluate((n) => {
    const c = window.DATA.chapters.find((x) => x.no === n);
    return c.mc.map((q) => ({ id: q.id, answer: q.answer, selectCount: q.selectCount }));
  }, no);
}

// 表示中の .q のテキストから全章の mc を逆引きし、正解を返す
export function answerForShownQuestion(page) {
  return page.evaluate(() => {
    const shown = document.querySelector('#app .q').textContent.trim();
    const tmp = document.createElement('div');
    for (const c of window.DATA.chapters) {
      for (const q of c.mc) {
        tmp.innerHTML = q.stem;
        if (tmp.textContent.trim() === shown) return { id: q.id, answer: q.answer, selectCount: q.selectCount };
      }
    }
    return null;
  });
}

export const choice = (page, actName, letter) => page.locator('button.choice[data-act="' + actName + '"][data-v="' + letter + '"]');

export function progressJson(overrides) {
  return JSON.stringify({
    version: 1,
    position: null,
    lessonsDone: [],
    quizResults: {},
    wrongLog: [],
    chapterTest: {},
    reports: [],
    examHistory: [],
    settings: { passRate: 0.7, unlockAll: true, examTimeLimit: true },
    ...overrides,
  });
}

export async function importJson(page, json) {
  await act(page, 'settings').click();
  await page.locator('#importFile').setInputFiles({ name: 'progress.json', mimeType: 'application/json', buffer: Buffer.from(json, 'utf8') });
  await act(page, 'import').click();
}
