import { act, fireEvent, render, screen } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { CartProvider } from "./CartContext";
import {
  getCartFromLocalStorage,
  saveCartToLocalStorage,
  removePhoneFromLocalStorage,
} from "../../services/cartServices/cartServices";
import MockUseOfCartContext from "../../mocks/cart/MockUseOfCartContext";

vi.mock("../../services/cartServices/cartServices");

describe("CartContext", () => {
  beforeEach(() => {
    getCartFromLocalStorage.mockReturnValue([]);
  });

  it("should provide an empty cart initially", () => {
    render(
      <CartProvider>
        <MockUseOfCartContext />
      </CartProvider>
    );

    expect(screen.getByText("0")).toBeInTheDocument();
  });

  it("should add a phone to the cart", () => {
    const phone = { id: "1", name: "Phone 1" };

    render(
      <CartProvider>
        <MockUseOfCartContext phone={phone} />
      </CartProvider>
    );
    act(() => {
      screen.getByText("Add Phone").click();
    });
    expect(screen.getByText("1")).toBeInTheDocument();
    expect(saveCartToLocalStorage).toHaveBeenCalledWith([phone]);
  });

  it("should remove a phone from the cart", () => {
    const phone = { id: "1", name: "Phone 1", cartId: "1" };
    getCartFromLocalStorage.mockReturnValue([phone]);

    render(
      <CartProvider>
        <MockUseOfCartContext phone={phone} />
      </CartProvider>
    );

    act(() => {
      fireEvent.click(screen.getByText("Remove Phone"));
    });

    expect(screen.getByText("0")).toBeInTheDocument();
    expect(removePhoneFromLocalStorage).toHaveBeenCalledWith("1");
  });
});
