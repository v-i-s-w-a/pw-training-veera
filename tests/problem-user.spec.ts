import { test, expect } from '@playwright/test';

test('problem user shows the same image for all inventory items', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/inventory.html');

    const srcs = await page.locator('.inventory_item_img img').evaluateAll(
        (imgs) => imgs.map((img) => img.getAttribute('src'))
    );

    expect(srcs).toHaveLength(6);
    expect(new Set(srcs).size).toBe(1);
});
