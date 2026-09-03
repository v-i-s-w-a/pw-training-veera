import {test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/loginPage';
test('User logs in', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.open();
    await loginPage.login('standard_user', 'secret_sauce');
});