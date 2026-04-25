import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://www.amazon.in');

  await page.waitForTimeout(2000);

  await page.locator("#twotabsearchtextbox").fill("Mac Book air");


 
  await page.waitForTimeout(1000);
 
   await page.locator("input[value='Go']").click()  

   await page.waitForTimeout(1000);
 
  await page.screenshot({ path: './screenshots/flipkart.png' });
  // await expect(page).toHaveURL('https://www.flipkart.com/');
  
});
