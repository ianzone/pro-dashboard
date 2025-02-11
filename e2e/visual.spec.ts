import { type Page, expect, test } from '@playwright/test';

test.describe.configure({ mode: 'serial' });
let page: Page;

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
});
test.afterAll(async () => {
  await page.close();
});

test('user/login', async () => {
  test.setTimeout(0);
  await page.goto('/user/login');
  await expect(page.getByText('Ant Design 是西湖区最具影响力的 Web 设计规范')).toBeVisible({
    timeout: 0,
  });
  await expect(page).toHaveScreenshot();
  await page.getByRole('textbox', { name: '用户名: admin or user' }).fill('admin');
  await page.getByRole('textbox', { name: '密码: ant.design' }).fill('ant.design');
  await page.getByRole('button', { name: '登 录' }).click();
  await page.waitForURL('**/dashboard/analysis', { timeout: 0 });
});

test.describe('dashboard', () => {
  test('analysis', async () => {
    await expect(page.getByText('总销售额')).toBeVisible({ timeout: 0 });
    await expect(page).toHaveScreenshot({ fullPage: true });
  });

  test('monitor', async () => {
    await page.getByRole('link', { name: '监控页' }).click();
    await expect(page.locator('.l7-marker-container')).toBeVisible();
    await expect(page).toHaveScreenshot({
      mask: [
        page.getByTestId('活动剩余时间'),
        page.getByTestId('目标评估'),
        page.getByTestId('资源剩余'),
        page.getByTestId('热门搜索'),
      ],
      fullPage: true,
    });
  });

  test('workplace', async () => {
    await page.getByRole('link', { name: '工作台' }).click();
    await expect(page).toHaveScreenshot({ fullPage: true });
  });
});

test.describe('form', () => {
  test('basic-form', async () => {
    await page.getByRole('menuitem', { name: 'form 表单页' }).click();
    await page.getByRole('link', { name: '基础表单' }).click();
    await expect(page).toHaveScreenshot({ fullPage: true });
  });

  test('step-form', async () => {
    await page.getByRole('link', { name: '分步表单' }).click();
    await expect(page).toHaveScreenshot({ fullPage: true });
  });

  test('advanced-form', async () => {
    await page.getByRole('link', { name: '高级表单' }).click();
    await expect(page).toHaveScreenshot({ fullPage: true });
  });
});

test.describe('list', () => {
  test('search/articles', async () => {
    await page.getByRole('menuitem', { name: 'table 列表页' }).click();
    await page.getByRole('menuitem', { name: '搜索列表' }).click();
    await page.getByRole('link', { name: '搜索列表（文章）' }).click();
    await expect(page).toHaveScreenshot({ fullPage: true });
  });

  test('search/projects', async () => {
    await page.getByRole('link', { name: '搜索列表（项目）' }).click();
    await expect(page.getByText('Angular')).toBeVisible();
    await expect(page).toHaveScreenshot({ fullPage: true });
  });

  test('search/applications', async () => {
    await page.getByRole('link', { name: '搜索列表（应用）' }).click();
    await expect(page.getByText('Angular')).toBeVisible();
    await expect(page).toHaveScreenshot({ fullPage: true });
  });

  test('table-list', async () => {
    await page.getByRole('link', { name: '查询表格' }).click();
    await expect(page.getByText('已上线').first()).toBeVisible();
    await expect(page).toHaveScreenshot({ fullPage: true });
  });

  test('basic-list', async () => {
    await page.getByRole('link', { name: '标准列表' }).click();
    await expect(page.getByRole('heading', { name: 'Alipay' })).toBeVisible();
    await expect(page).toHaveScreenshot({ fullPage: true });
  });

  test('card-list', async () => {
    await page.getByRole('link', { name: '卡片列表' }).click();
    await expect(page.getByRole('link', { name: 'Alipay' })).toBeVisible();
    await expect(page).toHaveScreenshot({ fullPage: true });
  });
});

test.describe('profile', () => {
  test('basic', async () => {
    await page.getByRole('menuitem', { name: 'profile 详情页' }).click();
    await page.getByRole('link', { name: '基础详情页' }).click();
    await expect(page).toHaveScreenshot({ fullPage: true });
  });

  test('advanced', async () => {
    await page.getByRole('link', { name: '高级详情页' }).click();
    await expect(page).toHaveScreenshot({ fullPage: true });
  });
});

test.describe('result', () => {
  test('success', async () => {
    await page.getByRole('menuitem', { name: 'check-circle 结果页' }).click();
    await page.getByRole('link', { name: '成功页' }).click();
    await expect(page).toHaveScreenshot({ fullPage: true });
  });

  test('fail', async () => {
    await page.getByRole('link', { name: '失败页' }).click();
    await expect(page).toHaveScreenshot({ fullPage: true });
  });
});

test.describe('exception', () => {
  test('403', async () => {
    await page.getByRole('menuitem', { name: 'warning 异常页' }).click();
    await page.getByRole('link', { name: '403' }).click();
    await expect(page).toHaveScreenshot({ fullPage: true });
  });

  test('404', async () => {
    await page.getByRole('link', { name: '404' }).click();
    await expect(page).toHaveScreenshot({ fullPage: true });
  });

  test('500', async () => {
    await page.getByRole('link', { name: '500' }).click();
    await expect(page).toHaveScreenshot({ fullPage: true });
  });
});

test.describe('account', () => {
  test('center', async () => {
    await page.getByRole('menuitem', { name: 'user 个人页' }).click();
    await page.getByRole('link', { name: '个人中心' }).click();
    await expect(page.getByText('海纳百川，有容乃大')).toBeVisible();
    await expect(page).toHaveScreenshot({ fullPage: true });
  });

  test.describe('settings', () => {
    test('basic', async () => {
      await page.getByRole('link', { name: '个人设置' }).click();
      await expect(page.getByText('邮箱')).toBeVisible();
      await expect(page).toHaveScreenshot({ fullPage: true });
    });

    test('security', async () => {
      await page.getByRole('menuitem', { name: '安全设置' }).click();
      await expect(page.getByRole('main')).toMatchAriaSnapshot(`
    - text: 安全设置
    - list:
      - listitem:
        - heading "账户密码" [level=4]
        - text: 当前密码强度：强
        - list:
          - listitem:
            - link "修改"
      - listitem:
        - heading "密保手机" [level=4]
        - text: /已绑定手机：\\d+\\*\\*\\*\\*\\d+/
        - list:
          - listitem:
            - link "修改"
      - listitem:
        - heading "密保问题" [level=4]
        - text: 未设置密保问题，密保问题可有效保护账户安全
        - list:
          - listitem:
            - link "设置"
      - listitem:
        - heading "备用邮箱" [level=4]
        - text: 已绑定邮箱：ant***sign.com
        - list:
          - listitem:
            - link "修改"
      - listitem:
        - heading "MFA 设备" [level=4]
        - text: 未绑定 MFA 设备，绑定后，可以进行二次确认
        - list:
          - listitem:
            - link "绑定"
    `);
    });

    test('binding', async () => {
      await page.getByRole('menuitem', { name: '账号绑定' }).click();
      await expect(page.getByRole('main')).toMatchAriaSnapshot(`
      - text: 账号绑定
      - list:
        - listitem:
          - img "taobao"
          - heading "绑定淘宝" [level=4]
          - text: 当前未绑定淘宝账号
          - list:
            - listitem:
              - link "绑定"
        - listitem:
          - img "alipay"
          - heading "绑定支付宝" [level=4]
          - text: 当前未绑定支付宝账号
          - list:
            - listitem:
              - link "绑定"
        - listitem:
          - img "dingding"
          - heading "绑定钉钉" [level=4]
          - text: 当前未绑定钉钉账号
          - list:
            - listitem:
              - link "绑定"
      `);
    });

    test('notification', async () => {
      await page.getByRole('menuitem', { name: '新消息通知' }).click();
      await expect(page.getByRole('main')).toMatchAriaSnapshot(`
        - text: 新消息通知
        - list:
          - listitem:
            - heading "账户密码" [level=4]
            - text: 其他用户的消息将以站内信的形式通知
            - list:
              - listitem:
                - switch "开 关" [checked]
          - listitem:
            - heading "系统消息" [level=4]
            - text: 系统消息将以站内信的形式通知
            - list:
              - listitem:
                - switch "开 关" [checked]
          - listitem:
            - heading "待办任务" [level=4]
            - text: 待办任务将以站内信的形式通知
            - list:
              - listitem:
                - switch "开 关" [checked]
        `);
    });
  });
});

// https://playwright.dev/docs/test-fixtures#overriding-fixtures
// const userTest = test.extend({
//   page: async ({ page }, use) => {
//     await page.goto('/user/login');
//     await expect(page.getByText('Ant Design 是西湖区最具影响力的 Web 设计规范')).toBeVisible();
//     // 将 page 传递给测试
//     await use(page);
//   },
// });

// userTest('user/login', async ({ page }) => {
//   await expect(page).toHaveScreenshot();
// });

// const dashboardTest = userTest.extend({
//   page: async ({ page }, use) => {
//     await page.getByRole('textbox', { name: '用户名: admin or user' }).fill('admin');
//     await page.getByRole('textbox', { name: '密码: ant.design' }).fill('ant.design');
//     await page.getByRole('button', { name: '登 录' }).click();
//     await page.waitForURL('**/dashboard/analysis');
//     await expect(page.getByText('总销售额')).toBeVisible({ timeout: 0 });
//     await use(page);
//   },
// });

// dashboardTest('dashboard/analysis', async ({ page }) => {
//   await expect(page).toHaveScreenshot({ fullPage: true });
// });

// dashboardTest('dashboard/monitor', async ({ page }) => {
//   await page.getByRole('link', { name: '监控页' }).click();
//   await expect(page.locator('.l7-marker-container')).toBeVisible({ timeout: 0 });
//   await expect(page).toHaveScreenshot({
//     mask: [
//       page.getByTestId('活动剩余时间'),
//       page.getByTestId('目标评估'),
//       page.getByTestId('资源剩余'),
//     ],
//     fullPage: true,
//   });
// });

// dashboardTest('dashboard/workplace', async ({ page }) => {
//   await page.getByRole('link', { name: '工作台' }).click();
//   await expect(page).toHaveScreenshot({ fullPage: true });
// });

// const formTest = dashboardTest.extend({
//   page: async ({ page }, use) => {
//     await page.getByRole('menuitem', { name: 'form 表单页' }).click();
//     await use(page);
//   },
// });

// formTest('form/basic-form', async ({ page }) => {
//   await page.getByRole('link', { name: '基础表单' }).click();
//   await expect(page).toHaveScreenshot({ fullPage: true });
// });

// formTest('form/step-form', async ({ page }) => {
//   await page.getByRole('link', { name: '分步表单' }).click();
//   await expect(page).toHaveScreenshot({ fullPage: true });
// });

// formTest('form/advanced-form', async ({ page }) => {
//   await page.getByRole('link', { name: '高级表单' }).click();
//   await expect(page).toHaveScreenshot({ fullPage: true });
// });

// const listTest = dashboardTest.extend({
//   page: async ({ page }, use) => {
//     await page.getByRole('menuitem', { name: 'table 列表页' }).click();
//     await page.getByRole('menuitem', { name: '搜索列表' }).click();
//     await use(page);
//   },
// });

// listTest('list/search/articles', async ({ page }) => {
//   await page.getByRole('link', { name: '搜索列表（文章）' }).click();
//   await expect(page).toHaveScreenshot({ fullPage: true });
// });

// listTest('list/search/projects', async ({ page }) => {
//   await page.getByRole('link', { name: '搜索列表（项目）' }).click();
//   await expect(page.getByText('Angular')).toBeVisible();
//   await expect(page).toHaveScreenshot({ fullPage: true });
// });

// listTest('list/search/applications', async ({ page }) => {
//   await page.getByRole('link', { name: '搜索列表（应用）' }).click();
//   await expect(page.getByText('Angular')).toBeVisible();
//   await expect(page).toHaveScreenshot({ fullPage: true });
// });

// listTest('list/table-list', async ({ page }) => {
//   await page.getByRole('link', { name: '查询表格' }).click();
//   await expect(page.getByText('已上线').first()).toBeVisible();
//   await expect(page).toHaveScreenshot({ fullPage: true });
// });

// listTest('list/basic-list', async ({ page }) => {
//   await page.getByRole('link', { name: '标准列表' }).click();
//   await expect(page.getByRole('heading', { name: 'Alipay' })).toBeVisible();
//   await expect(page).toHaveScreenshot({ fullPage: true });
// });

// listTest('list/card-list', async ({ page }) => {
//   await page.getByRole('link', { name: '卡片列表' }).click();
//   await expect(page.getByRole('link', { name: 'Alipay' })).toBeVisible();
//   await expect(page).toHaveScreenshot({ fullPage: true });
// });

// const profileTest = dashboardTest.extend({
//   page: async ({ page }, use) => {
//     await page.getByRole('menuitem', { name: 'profile 详情页' }).click();
//     await use(page);
//   },
// });

// profileTest('profile/basic', async ({ page }) => {
//   await page.getByRole('link', { name: '基础详情页' }).click();
//   await expect(page).toHaveScreenshot({ fullPage: true });
// });

// profileTest('profile/advanced', async ({ page }) => {
//   await page.getByRole('link', { name: '高级详情页' }).click();
//   await expect(page).toHaveScreenshot({ fullPage: true });
// });

// const resultTest = dashboardTest.extend({
//   page: async ({ page }, use) => {
//     await page.getByRole('menuitem', { name: 'check-circle 结果页' }).click();
//     await use(page);
//   },
// });

// resultTest('result/success', async ({ page }) => {
//   await page.getByRole('link', { name: '成功页' }).click();
//   await expect(page).toHaveScreenshot({ fullPage: true });
// });

// resultTest('result/fail', async ({ page }) => {
//   await page.getByRole('link', { name: '失败页' }).click();
//   await expect(page).toHaveScreenshot({ fullPage: true });
// });

// const exceptionTest = dashboardTest.extend({
//   page: async ({ page }, use) => {
//     await page.getByRole('menuitem', { name: 'warning 异常页' }).click();
//     await use(page);
//   },
// });

// exceptionTest('exception/403', async ({ page }) => {
//   await page.getByRole('link', { name: '403' }).click();
//   await expect(page).toHaveScreenshot({ fullPage: true });
// });

// exceptionTest('exception/404', async ({ page }) => {
//   await page.getByRole('link', { name: '404' }).click();
//   await expect(page).toHaveScreenshot({ fullPage: true });
// });

// exceptionTest('exception/500', async ({ page }) => {
//   await page.getByRole('link', { name: '500' }).click();
//   await expect(page).toHaveScreenshot({ fullPage: true });
// });

// const accountTest = dashboardTest.extend({
//   page: async ({ page }, use) => {
//     await page.getByRole('menuitem', { name: 'user 个人页' }).click();
//     await use(page);
//   },
// });

// accountTest('account/center', async ({ page }) => {
//   await page.getByRole('link', { name: '个人中心' }).click();
//   await expect(page.getByText('海纳百川，有容乃大')).toBeVisible();
//   await expect(page).toHaveScreenshot({ fullPage: true });
// });

// accountTest('account/settings', async ({ page }) => {
//   await page.getByRole('link', { name: '个人设置' }).click();
//   await expect(page.getByText('邮箱')).toBeVisible();
//   await expect(page).toHaveScreenshot({ fullPage: true });
//   await page.getByRole('menuitem', { name: '安全设置' }).click();
//   await expect(page.getByRole('main')).toMatchAriaSnapshot(`
//     - text: 安全设置
//     - list:
//       - listitem:
//         - heading "账户密码" [level=4]
//         - text: 当前密码强度：强
//         - list:
//           - listitem:
//             - link "修改"
//       - listitem:
//         - heading "密保手机" [level=4]
//         - text: /已绑定手机：\\d+\\*\\*\\*\\*\\d+/
//         - list:
//           - listitem:
//             - link "修改"
//       - listitem:
//         - heading "密保问题" [level=4]
//         - text: 未设置密保问题，密保问题可有效保护账户安全
//         - list:
//           - listitem:
//             - link "设置"
//       - listitem:
//         - heading "备用邮箱" [level=4]
//         - text: 已绑定邮箱：ant***sign.com
//         - list:
//           - listitem:
//             - link "修改"
//       - listitem:
//         - heading "MFA 设备" [level=4]
//         - text: 未绑定 MFA 设备，绑定后，可以进行二次确认
//         - list:
//           - listitem:
//             - link "绑定"
//     `);

//   await page.getByRole('menuitem', { name: '账号绑定' }).click();
//   await expect(page.getByRole('main')).toMatchAriaSnapshot(`
//       - text: 账号绑定
//       - list:
//         - listitem:
//           - img "taobao"
//           - heading "绑定淘宝" [level=4]
//           - text: 当前未绑定淘宝账号
//           - list:
//             - listitem:
//               - link "绑定"
//         - listitem:
//           - img "alipay"
//           - heading "绑定支付宝" [level=4]
//           - text: 当前未绑定支付宝账号
//           - list:
//             - listitem:
//               - link "绑定"
//         - listitem:
//           - img "dingding"
//           - heading "绑定钉钉" [level=4]
//           - text: 当前未绑定钉钉账号
//           - list:
//             - listitem:
//               - link "绑定"
//       `);

//   await page.getByRole('menuitem', { name: '新消息通知' }).click();
//   await expect(page.getByRole('main')).toMatchAriaSnapshot(`
//         - text: 新消息通知
//         - list:
//           - listitem:
//             - heading "账户密码" [level=4]
//             - text: 其他用户的消息将以站内信的形式通知
//             - list:
//               - listitem:
//                 - switch "开 关" [checked]
//           - listitem:
//             - heading "系统消息" [level=4]
//             - text: 系统消息将以站内信的形式通知
//             - list:
//               - listitem:
//                 - switch "开 关" [checked]
//           - listitem:
//             - heading "待办任务" [level=4]
//             - text: 待办任务将以站内信的形式通知
//             - list:
//               - listitem:
//                 - switch "开 关" [checked]
//         `);
// });
