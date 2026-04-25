import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://www.moneycontrol.com/commodity/');

  await page.waitForTimeout(2000);

// use array to store commodity names and loop through them to get their prices
  const commodities = ['GOLD', 'SILVER', 'CRUDEOIL','COPPER'];

  for(let commodity of commodities){
    const price = await page.locator(`//table[@class='curDerivatives_web_commontable__NT0j9']/tbody/tr/td/h4[contains(text(),'${commodity}')]//following::td[1]`).textContent();
    console.log(`${commodity} Price: ${price}`);
  }



  
 
  await page.screenshot({ path: './screenshots/flipkart.png' });
  // await expect(page).toHaveURL('https://www.flipkart.com/');
  
});
