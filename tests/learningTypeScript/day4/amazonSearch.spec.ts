import { test, expect } from '@playwright/test';

test('Search for MacBook Pro 5 on Amazon India', async ({ page }) => {
    // Navigate to Amazon India
    await page.goto('https://www.amazon.in');

    // Verify the page title contains Amazon
    await expect(page).toHaveTitle(/Amazon/);

    // Locate the search box and type the search term
    const searchBox = page.locator('#twotabsearchtextbox');
    await searchBox.fill('MacBook Pro 5');

    // Click the search button
    await page.locator('#nav-search-submit-button').click();

    // Wait for search results to load
    await page.waitForLoadState('domcontentloaded');

    // Verify the search results page URL contains the search term
    await expect(page).toHaveURL(/MacBook\+Pro\+5|MacBook%20Pro%205/i);

    // Verify at least one product result is displayed
    const searchResults = page.locator('.s-main-slot .s-result-item[data-component-type="s-search-result"]');
    await expect(searchResults.first()).toBeVisible();

    // Verify the search term appears in results header
    const resultsHeader = page.locator('.a-color-state.a-text-bold');
    await expect(resultsHeader).toContainText('MacBook Pro 5');

    // Take a full page screenshot of the search results
    await page.screenshot({ path: 'screenshots/amazon_macbook_search_results.png', fullPage: true });

    console.log('Search for MacBook Pro 5 on Amazon India completed successfully.');
});
