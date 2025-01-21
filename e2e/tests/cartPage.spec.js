import { test, expect } from "@playwright/test";

test.describe("Cart Page", () => {
  test("first one detail page, add to cart, then go to other phone add and check if it is in the cart", async ({
    page,
  }) => {
    await page.goto("http://localhost:5173/phone/SMG-S24U");

    await page.waitForTimeout(10000);

    const firstPhoneStorage = page.getByRole("button", { name: "512 GB" });
    await firstPhoneStorage.click();

    const startAddButton = page.getByRole("button", { name: "Añadir" });
    await startAddButton.click();

    await page.goto("http://localhost:5173/phone/XIA-RN13");

    const secondPhoneStorage = page.getByRole("button", { name: "128 GB" });
    await secondPhoneStorage.click();

    const addSecondPhone = page.getByRole("button", { name: "Añadir" });
    await addSecondPhone.click();

    const cartIcon = page.locator('[data-testid="full-cart-icon"]');
    await cartIcon.click();

    const cartItems = await page.locator("ul.cart-list > li");
    const itemCount = await cartItems.count();

    expect(itemCount).toBe(2);

    const firstPhoneInCart = await page.getByText("Galaxy S24 Ultra");
    expect(firstPhoneInCart).toBeVisible();

    const secondPhoneInCart = await page.getByText("Redmi Note 13");
    expect(secondPhoneInCart).toBeVisible();

    const eliminarButtons = page.locator("button", { hasText: "eliminar" });
    await eliminarButtons.first().click();

    const newCartItems = await page.locator("ul.cart-list > li");
    const newItemCount = await newCartItems.count();

    expect(newItemCount).toBe(1);
  });
});
