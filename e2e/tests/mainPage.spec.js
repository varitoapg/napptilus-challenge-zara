import { test, expect } from "@playwright/test";

test.describe("Main Page", () => {
  test("should load the main page and display the correct title, load 19 phones and look for 'sam' and then 6 results", async ({
    page,
  }) => {
    await page.goto("http://localhost:5173");

    const title = await page.title();
    expect(title).toBe("Zara Challenge");

    await page.waitForTimeout(10000);

    const resultsCount = page.locator(".phones-page__results-count");

    await expect(resultsCount).toHaveText("19 results");

    const searchInput = page.locator(".search-phone-input");

    await searchInput.fill("sam");

    await expect(searchInput).toHaveValue("sam");

    const newResults = page.locator(".phones-page__results-count");

    await expect(newResults).toHaveText("6 results");
  });
});
