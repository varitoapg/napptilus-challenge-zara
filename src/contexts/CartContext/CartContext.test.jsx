import { act, fireEvent, render, screen } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { CartProvider } from "./CartContext";
import {
  getCartFromLocalStorage,
  saveCartToLocalStorage,
  removePhoneFromLocalStorage,
} from "../../services/cartServices/cartServices";
import MockUseOfCartContext from "../../mocks/cart/MockUseOfCartContext";
import { mockedCart } from "../../mocks/cart/cart";

vi.mock("../../services/cartServices/cartServices");

describe("CartContext", () => {
  beforeEach(() => {
    getCartFromLocalStorage.mockReturnValue([]);
  });

  it("should provide an empty cart initially", () => {
    const results = "0";

    render(
      <CartProvider>
        <MockUseOfCartContext />
      </CartProvider>
    );
    const expectedResults = screen.getByText(results);

    expect(expectedResults).toBeInTheDocument();
  });

  it("should add a phone to the cart", () => {
    const addButtonText = "Add Phone";
    const results = "1";

    render(
      <CartProvider>
        <MockUseOfCartContext phone={mockedCart[0]} />
      </CartProvider>
    );
    act(() => {
      const expectedAddButton = screen.getByText(addButtonText);
      fireEvent.click(expectedAddButton);
    });

    const expectedResults = screen.getByText(results);

    expect(expectedResults).toBeInTheDocument();
    expect(saveCartToLocalStorage).toHaveBeenCalledWith([mockedCart[0]]);
  });

  it("should remove a phone from the cart", () => {
    const removeButtonText = "Remove Phone";
    const results = "0";
    getCartFromLocalStorage.mockReturnValue([mockedCart[0]]);

    render(
      <CartProvider>
        <MockUseOfCartContext phone={mockedCart[0]} />
      </CartProvider>
    );

    act(() => {
      const expectedRemoveButton = screen.getByText(removeButtonText);

      fireEvent.click(expectedRemoveButton);
    });

    const expectedResults = screen.getByText(results);

    expect(expectedResults).toBeInTheDocument();
    expect(removePhoneFromLocalStorage).toHaveBeenCalledWith(
      mockedCart[0].cartId
    );
  });
});
