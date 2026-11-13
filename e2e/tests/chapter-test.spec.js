import { test, expect } from '@playwright/test';
import { watchPage, openApp, act, goHome, chapterMc, choice } from './helpers.js';

const LETTERS = 'ABCDE';

async function answerCorrect(page, q) {
  if (q.selectCount <= 1) {
    await choice(page, 'pick', q.answer[0]).click();
    return;
  }
  for (const l of q.answer) await choice(page, 'pick', l).click();
  await act(page, 'confirm-multi').click();
}

test.describe('(3) 章末テスト', () => {
  test('単一選択・複数選択（2つ選べ）に回答し、採点結果が表示される', async ({ page }) => {
    const errors = watchPage(page);
    await openApp(page);
    const mc = await chapterMc(page, 1);
    const firstMulti = mc.findIndex((q) => q.selectCount === 2);
    expect(mc[0].selectCount).toBe(1);
    expect(firstMulti).toBeGreaterThan(0);

    await act(page, 'chapter-test').first().click();
    await expect(page.getByRole('heading', { name: '第1章 章末テスト' })).toBeVisible();

    // 問1（単一選択）: わざと不正解を選ぶ
    const wrong = LETTERS.split('').find((l) => !mc[0].answer.includes(l));
    await expect(page.getByText('1 / ' + mc.length)).toBeVisible();
    await choice(page, 'pick', wrong).click();
    await expect(page.locator('#app h3')).toHaveText('不正解（正解: ' + mc[0].answer.join('、') + '）');
    await expect(choice(page, 'pick', wrong)).toHaveClass(/wrong/);
    await act(page, 'run-next').click();

    for (let i = 1; i < mc.length; i++) {
      const q = mc[i];
      await expect(page.getByText((i + 1) + ' / ' + mc.length, { exact: true })).toBeVisible();
      if (i === firstMulti) {
        // 複数選択: 2つ揃うまで回答ボタンは無効、3つ目は選べない
        await expect(page.locator('.multi-note')).toHaveText('（2つ選べ）');
        await choice(page, 'pick', q.answer[0]).click();
        await expect(act(page, 'confirm-multi')).toBeDisabled();
        await expect(act(page, 'confirm-multi')).toHaveText('回答する（1/2）');
        await choice(page, 'pick', q.answer[1]).click();
        await expect(act(page, 'confirm-multi')).toBeEnabled();
        const extra = LETTERS.split('').find((l) => !q.answer.includes(l));
        await choice(page, 'pick', extra).click();
        await expect(page.locator('.warn')).toContainText('2個を超えて選べません');
        await expect(act(page, 'confirm-multi')).toHaveText('回答する（2/2）');
        await act(page, 'confirm-multi').click();
      } else {
        await answerCorrect(page, q);
      }
      await expect(page.locator('#app h3')).toHaveText('正解（正解: ' + q.answer.join('、') + '）');
      await act(page, 'run-next').click();
    }

    const right = mc.length - 1;
    await expect(page.getByRole('heading', { name: '第1章 章末テスト 結果' })).toBeVisible();
    await expect(page.getByText(mc.length + '問中 ' + right + '問正解（' + Math.round((right * 100) / mc.length) + '%）')).toBeVisible();
    await expect(page.getByRole('heading', { name: '合格' })).toBeVisible();

    await goHome(page);
    await expect(page.locator('.chap').first().locator('.tag.done')).toHaveText('完了');
    await expect(act(page, 'review')).toContainText('間違えた問題 1 問');
    expect(errors).toEqual([]);
  });
});
