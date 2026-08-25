import { test, expect } from '../../fixtures.ts';

test('inventory item count', async ({ inventoryPage }) => {
    await expect(inventoryPage.items()).toHaveCount(6);
});
