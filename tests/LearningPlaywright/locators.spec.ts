import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://www.flipkart.com/');

  await page.waitForTimeout(2000);

  await page.locator("//span[contains(text(),'✕')]").click();

  await page.locator("//input[contains(@name,'q')]").first().fill('laptop');

  await page.waitForTimeout(2000);
  
  await page.locator("//button[starts-with(@title,'Search for Products, Brands and More')]").first().click();

  await page.screenshot({ path: './screenshots/flipkart.png' });
  // await expect(page).toHaveURL('https://www.flipkart.com/');
  
});
