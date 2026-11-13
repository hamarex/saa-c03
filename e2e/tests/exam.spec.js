import { test, expect } from '@playwright/test';
import { watchPage, openApp, act, goHome, answerForShownQuestion, choice } from './helpers.js';

const TOTAL = 65;

test.describe('(4) 総仕上げ', () => {
  test('65問を1周回答し、採点して結果が表示される', async ({ page }) => {
    const errors = watchPage(page);
    await openApp(page);

    await act(page, 'exam').click();
    await expect(page.getByRole('heading', { name: '総仕上げ（' + TOTAL + '問）' })).toBeVisible();
    await expect(page.locator('#timer')).toHaveText(/^\d+:\d{2}$/);

    const seen = new Set();
    for (let i = 0; i < TOTAL; i++) {
      await expect(page.getByText('問' + (i + 1) + ' / ' + TOTAL, { exact: true })).toBeVisible();
      const q = await answerForShownQuestion(page);
      expect(q, '問' + (i + 1) + ' のデータが見つからない').not.toBeNull();
      seen.add(q.id);
      for (const l of q.answer) await choice(page, 'exam-pick', l).click();
      for (const l of q.answer) await expect(choice(page, 'exam-pick', l)).toHaveClass(/sel/);
      await expect(page.getByText('回答済み ' + (i + 1) + ' / ' + TOTAL)).toBeVisible();
      if (i + 1 < TOTAL) await act(page, 'exam-next').click();
    }
    expect(seen.size).toBe(TOTAL);
    await expect(act(page, 'exam-next')).toBeDisabled();

    await act(page, 'exam-confirm').first().click();
    await expect(page.getByRole('heading', { name: '最終確認' })).toBeVisible();
    await expect(page.locator('.card b.ok')).toHaveText('0');
    await act(page, 'exam-submit').click();

    await expect(page.getByRole('heading', { name: '総仕上げ 結果' })).toBeVisible();
    await expect(page.getByRole('heading', { name: /1000 \/ 1000\s+合格ライン到達/ })).toBeVisible();
    await expect(page.getByText(/採点対象 50問中 50問正解（全65問中 65問正解）/)).toBeVisible();
    await expect(page.getByText('全問正解です。')).toBeVisible();
    await expect(page.getByRole('heading', { name: 'ドメイン別成績（全問）' })).toBeVisible();

    await goHome(page);
    await expect(page.getByRole('heading', { name: '総仕上げのスコア推移' })).toBeVisible();
    await expect(page.locator('table.t td', { hasText: '1000 / 1000' })).toBeVisible();
    expect(errors).toEqual([]);
  });
});
