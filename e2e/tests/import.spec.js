import { test, expect } from '@playwright/test';
import { watchPage, openApp, act, goHome, homeHeading, importJson, progressJson } from './helpers.js';

test.describe('(5) import 後の描画', () => {
  test('正常な進捗JSONを読み込むとホームとレッスンに反映される', async ({ page }) => {
    const errors = watchPage(page);
    await openApp(page);
    const l2 = await page.evaluate(() => {
      const c = window.DATA.chapters.find((x) => x.no === 1);
      return { id: c.lessons[1].id, title: c.lessons[1].title, pages: c.lessons[1].pages.length, total: c.lessons.length };
    });
    const json = progressJson({
      position: { ch: 1, lessonId: l2.id, page: 1 },
      lessonsDone: ['c01-l01'],
      chapterTest: { 1: { score: 0.8, passed: true } },
    });

    await importJson(page, json);
    await expect(page.locator('.warn')).toHaveText('進捗を読み込みました。');

    await goHome(page);
    const ch1 = page.locator('.chap').first();
    await expect(ch1.locator('.tag.done')).toHaveText('完了');
    await expect(ch1).toContainText('レッスン 1/' + l2.total);
    await expect(ch1).toContainText('章末テスト 80%（合格）');
    await expect(act(page, 'continue')).toContainText(l2.title + ' ページ2');

    await page.reload();
    await expect(page.getByText('ページ 2/' + l2.pages)).toBeVisible();
    expect(errors).toEqual([]);
  });

  test('position.lessonId に "constructor" を含む悪意あるJSONでも白画面にならない', async ({ page }) => {
    const errors = watchPage(page);
    await openApp(page);
    const json = progressJson({ position: { ch: 1, lessonId: 'constructor', page: 0 } });

    await importJson(page, json);
    await expect(page.locator('#app')).not.toBeEmpty();

    // import 直後にホームへ戻っても描画できること
    await act(page, 'home').click();
    await expect(homeHeading(page)).toBeVisible();

    // リロード（起動時の位置復元）でも白画面にならないこと
    await page.reload();
    await expect(page.locator('#app')).not.toBeEmpty();
    await expect(page.locator('#app h1')).toBeVisible();
    expect(errors).toEqual([]);
  });
});
