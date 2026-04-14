import { test, expect } from '@playwright/test';

test('Search for iPhone 17 Pro Max deal on Flipkart', async ({ page }) => {
    // Navigate to Flipkart
    await page.goto('https://www.flipkart.com');

    // Handle the login popup if it appears — close it safely
    try {
        const closeButton = page.locator('button.R6HOf5, [class*="close"], button._2KpZ6l._2doB4z');
        await closeButton.first().waitFor({ state: 'visible', timeout: 5000 });
        await closeButton.first().click();
    } catch {
        // Login popup was not present — continue with the test
    }

    // Assert the page title contains "Flipkart"
    await expect(page).toHaveTitle(/Flipkart/);

    // Fill the search box with the search term
    const searchBox = page.locator('input[name="q"], input.Pke_EE');
    await searchBox.first().fill('iPhone 17 Pro Max deal');

    // Press Enter to trigger the search
    await page.keyboard.press('Enter');

    // Wait for the results page to load
    await page.waitForLoadState('domcontentloaded');

    // Assert the URL contains "iPhone" or "iphone"
    await expect(page).toHaveURL(/iphone/i);

    // Assert at least one product result is visible
    const productResults = page.locator('div[data-id], ._1AtVbE, div._13oc-S');
    await expect(productResults.first()).toBeVisible();

    // Assert the page body contains the text "iPhone"
    await expect(page.locator('body')).toContainText('iPhone');

    // Take a full page screenshot of the search results
    await page.screenshot({ path: 'screenshots/flipkart_iphone17_promax_deal.png', fullPage: true });

    console.log('Flipkart search for iPhone 17 Pro Max deal completed successfully.');
});
