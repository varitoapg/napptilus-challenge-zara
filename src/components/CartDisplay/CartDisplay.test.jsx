import { cleanup, render, screen } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import CartDisplay from "./CartDisplay";
import { useCartInformation } from "../../hooks/useCartInformation/useCartInformation";
import { useCartContext } from "../../contexts/CartContext/CartContext";

vi.mock("../../hooks/useCartInformation/useCartInformation");
vi.mock("../../contexts/CartContext/CartContext", () => ({
  useCartContext: vi.fn(),
}));

describe("CartDisplay", () => {
  beforeEach(cleanup);

  it("renders an empty cart message when cart is empty", () => {
    useCartInformation.mockReturnValue({ cart: [] });

    render(<CartDisplay />);

    const cartList = screen.queryByRole("list");
    expect(cartList).toBeNull();
  });

  it("renders items in the cart", () => {
    const mockCart = [
      { name: "Phone 1", price: 100 },
      { name: "Phone 2", price: 200 },
    ];
    useCartInformation.mockReturnValue({ cart: mockCart });

    // Mock useCartContext to return some basic functionality for ItemInCart
    const mockUseCartContext = {
      addPhoneToCart: vi.fn(),
      removePhoneFromCart: vi.fn(),
    };
    useCartContext.mockReturnValue(mockUseCartContext);

    render(<CartDisplay />);

    mockCart.forEach((phone) => {
      expect(screen.getByText(phone.name)).toBeInTheDocument();
    });
  });
});
