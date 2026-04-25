import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://www.amazon.in');

  await page.waitForTimeout(2000);

 const searchbar =  await page.locator("input[id*='twotab']");

 searchbar.fill("Mac Book air");

 
  await page.waitForTimeout(1000);
 
  const gobtn =  await page.locator("input[value='Go']");  
gobtn.click()
   await page.waitForTimeout(1000);

   searchbar.clear();

 

   searchbar.fill("Smart TV's")
 gobtn.click()
  await page.screenshot({ path: './screenshots/flipkart.png' });
  // await expect(page).toHaveURL('https://www.flipkart.com/');
  
});
