import { test, expect } from '@playwright/test';
import { watchPage, openApp, act, homeHeading } from './helpers.js';

test.describe('(1) ホーム表示', () => {
  test('ホームが表示され、コンソールエラーが無い', async ({ page }) => {
    const errors = watchPage(page);
    await openApp(page);

    await expect(homeHeading(page)).toBeVisible();
    await expect(page.getByText('全体の進捗')).toBeVisible();
    await expect(page.locator('.chap')).toHaveCount(10);
    await expect(page.getByText('第1章 ID・アクセス管理とガバナンス')).toBeVisible();
    await expect(act(page, 'continue')).toContainText('続きから（第1章');
    await expect(act(page, 'exam')).toBeEnabled();
    await expect(page.locator('.warn')).toHaveCount(0);

    expect(errors).toEqual([]);
  });
});
