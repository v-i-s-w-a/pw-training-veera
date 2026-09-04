import { test as setup } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';

setup('authenticate as standard user', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.open();
    await loginPage.login('standard_user', 'secret_sauce');
    await page.context().storageState({ path: '.auth/user.json' });
});

setup('authenticate as problem user', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.open();
    await loginPage.login('problem_user', 'secret_sauce');
    await page.context().storageState({ path: '.auth/problem.json' });
});
