import { test, expect } from '../../fixtures.ts';

test('Add and Remove Items from Cart', async ({ cartPage }) => {
    await expect(cartPage.itemNames()).toContainText([
        'Sauce Labs Backpack',
        'Sauce Labs Bike Light',
    ]);

    await cartPage.removeItems('Sauce Labs Backpack').click();

    await expect(cartPage.itemNames()).toHaveText('Sauce Labs Bike Light');
});