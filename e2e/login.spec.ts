import { expect, test } from '@playwright/test';

test('user/login', async ({ page }) => {
  test.setTimeout(0);
  await page.goto('/user/login');
  await expect(page.getByText('Ant Design 是西湖区最具影响力的 Web 设计规范')).toBeVisible();
  await expect(page).toHaveScreenshot();
  await page.getByRole('textbox', { name: '用户名: admin or user' }).fill('admin');
  await page.getByRole('textbox', { name: '密码: ant.design' }).fill('ant.design');
  await page.getByRole('button', { name: '登 录' }).click();
  await page.waitForURL('**/dashboard/analysis');
  await expect(page.getByText('总销售额')).toBeVisible({ timeout: 0 });
  await page.context().storageState({ path: 'e2e/login.json' });
});
