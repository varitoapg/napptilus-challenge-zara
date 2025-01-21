import { test, expect } from "@playwright/test";

test.describe("Details Page", () => {
  test("should load the main page, click on the first phone, and show storages and colors", async ({
    page,
  }) => {
    await page.goto("http://localhost:5173");

    await page.waitForTimeout(10000);

    const firstPhoneCard = page.locator('[data-testid="phone-card"]').first();
    await firstPhoneCard.click();

    await expect(page).toHaveURL(/\/phone\/SMG-S24U$/);

    const startAddButton = page.getByRole("button", { name: "Añadir" });
    await expect(startAddButton).toBeDisabled();

    const storageButton = page.getByRole("button", { name: "512 GB" });
    await storageButton.click();

    await expect(startAddButton).toBeEnabled();

    const titaniumBlackButton = page.getByRole("button", {
      name: "Titanium Black",
    });
    await titaniumBlackButton.click();
    await page.waitForTimeout(500);

    const colorNameParagraph = page.locator('p:has-text("Titanium Black")');

    await expect(colorNameParagraph).toBeVisible();
  });

  test("Should load SMG-S24U phone detail page and show similar items click the first and navigate to its page", async ({
    page,
  }) => {
    await page.goto("http://localhost:5173/phone/SMG-S24U");

    await page.waitForTimeout(10000);

    const similarItems = page.locator('[data-testid="phone-card-list"]');
    await expect(similarItems).toBeVisible();

    const firstPhoneName = await page
      .locator('[data-testid="phone-card-list"] .phone-card__name')
      .first()
      .textContent();

    const firstPhoneCard = page.locator('[data-testid="phone-card"]').first();
    await firstPhoneCard.click();

    const newPhoneTitle = await page.getByRole("heading", {
      name: firstPhoneName,
    });
    await expect(newPhoneTitle).toBeVisible();
  });
});
