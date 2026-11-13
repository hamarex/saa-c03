import { test, expect } from '@playwright/test';
import { watchPage, openApp, act, goHome, STORAGE_KEY } from './helpers.js';

// 第1章 最初のレッスンで、確認クイズのある最初のページ番号（0 始まり）と問題数を取得
function firstQuizPage(page) {
  return page.evaluate(() => {
    const l = window.DATA.chapters.find((c) => c.no === 1).lessons[0];
    const idx = l.pages.findIndex((p) => p.oxIds.length > 0);
    return { lessonId: l.id, idx, count: l.pages[idx].oxIds.length, pages: l.pages.length };
  });
}

// 続きからレッスンを開き、確認クイズを解いて次ページへ進む。到達したページ番号（1 始まり）を返す
async function lessonThroughQuiz(page) {
  const info = await firstQuizPage(page);
  expect(info.idx).toBeGreaterThanOrEqual(0);
  expect(info.idx + 1).toBeLessThan(info.pages);

  await act(page, 'continue').click();
  await expect(page.getByText('ページ 1/' + info.pages)).toBeVisible();
  for (let i = 0; i < info.idx; i++) {
    await act(page, 'page-next').click();
    await expect(page.getByText('ページ ' + (i + 2) + '/' + info.pages)).toBeVisible();
  }

  await expect(act(page, 'page-quiz')).toHaveText('次へ（確認クイズ ' + info.count + '問）');
  await act(page, 'page-quiz').click();
  for (let qi = 0; qi < info.count; qi++) {
    await expect(page.getByText('確認クイズ ' + (qi + 1) + ' / ' + info.count)).toBeVisible();
    await page.locator('button.choice[data-act="pick"][data-v="true"]').click();
    await expect(page.locator('#app h3')).toHaveText(/^(正解|不正解)（正解: [○×]）$/);
    await expect(page.locator('.explain')).toBeVisible();
    await act(page, 'quiz-next').click();
  }

  const reached = info.idx + 2;
  await expect(page.getByText('ページ ' + reached + '/' + info.pages)).toBeVisible();
  await expect(page.locator('.card.lesson')).toBeVisible();
  return { ...info, reached };
}

test.describe('(2) レッスン→確認クイズ→次ページ', () => {
  test('確認クイズに回答して次のページへ進める', async ({ page }) => {
    const errors = watchPage(page);
    await openApp(page);
    const info = await lessonThroughQuiz(page);

    const saved = await page.evaluate((k) => JSON.parse(localStorage.getItem(k)), STORAGE_KEY);
    expect(saved.position).toEqual({ ch: 1, lessonId: info.lessonId, page: info.reached - 1 });
    expect(Object.keys(saved.quizResults)).toHaveLength(info.count);
    expect(errors).toEqual([]);
  });
});

test.describe('(6) リロード後の進捗復元', () => {
  test('リロードすると保存位置のレッスンページが開き、ホームの続きからにも反映される', async ({ page }) => {
    const errors = watchPage(page);
    await openApp(page);
    const info = await lessonThroughQuiz(page);

    await page.reload();
    await expect(page.getByText('ページ ' + info.reached + '/' + info.pages)).toBeVisible();
    await expect(page.locator('.card.lesson')).toBeVisible();

    await goHome(page);
    await expect(act(page, 'continue')).toContainText('ページ' + info.reached + '）');
    await expect(page.locator('.chap').first().locator('.tag.prog')).toHaveText('進行中');

    const saved = await page.evaluate((k) => JSON.parse(localStorage.getItem(k)), STORAGE_KEY);
    expect(Object.keys(saved.quizResults)).toHaveLength(info.count);
    expect(errors).toEqual([]);
  });
});
