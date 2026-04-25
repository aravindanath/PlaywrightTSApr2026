import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://www.icici.bank.in/');

  await page.waitForTimeout(2000);

  await page.locator("//div[@class='hero-cards--item-card']//span[contains(text(),'Accounts')]")
  // await page.getByText(" Accounts ").first().click();
  // await page.locator("(//span[contains(text(),'Accounts')])").first().click();

  await page.screenshot({ path: './screenshots/icici.png' });
  // await expect(page).toHaveURL('https://www.icici.bank.in/');
  
});
