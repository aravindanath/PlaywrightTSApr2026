import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://bootswatch.com/default/');

  await page.waitForTimeout(2000);

  const dropdown =  await page.locator(".nav-link.dropdown-toggle").nth(7);


  dropdown.highlight();
  await page.waitForTimeout(1000);
  dropdown.click();
   
 
 
  await page.screenshot({ path: './screenshots/flipkart.png' });
  // await expect(page).toHaveURL('https://www.flipkart.com/');
  
});
