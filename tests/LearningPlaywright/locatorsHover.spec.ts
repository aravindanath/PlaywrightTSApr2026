import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://www.noon.com');

  await page.waitForTimeout(2000);

  await page.locator("//span[starts-with(text(),'Women')]").hover();

  await page.waitForTimeout(2000);
  // await page.locator('a').filter({ hasText: 'Luggage' }).nth(2).click();
  await page.locator("(//a[contains(text(),'Luggage')])[2]").click();

  await page.waitForTimeout(2000);
  
 
  await page.screenshot({ path: './screenshots/flipkart.png' });
  // await expect(page).toHaveURL('https://www.flipkart.com/');
  
});
