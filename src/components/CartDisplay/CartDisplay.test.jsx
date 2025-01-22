import { cleanup, render, screen } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { BrowserRouter } from "react-router-dom";
import CartDisplay from "./CartDisplay";
import { useCartInformation } from "../../hooks/useCartInformation/useCartInformation";
import { useCartContext } from "../../contexts/CartContext/CartContext";
import { mockedCart } from "../../mocks/cart/cart";

vi.mock("../../hooks/useCartInformation/useCartInformation");
vi.mock("../../contexts/CartContext/CartContext", () => ({
  useCartContext: vi.fn(),
}));

describe("CartDisplay", () => {
  beforeEach(cleanup);

  it("renders an empty cart message when cart is empty", () => {
    useCartInformation.mockReturnValue({ cart: [] });

    render(
      <BrowserRouter>
        <CartDisplay />
      </BrowserRouter>
    );

    const cartList = screen.queryByRole("list");

    expect(cartList).toBeNull();
  });

  it("renders items in the cart", () => {
    useCartInformation.mockReturnValue({ cart: mockedCart });

    const mockUseCartContext = {
      addPhoneToCart: vi.fn(),
      removePhoneFromCart: vi.fn(),
    };

    useCartContext.mockReturnValue(mockUseCartContext);

    render(
      <BrowserRouter>
        <CartDisplay />
      </BrowserRouter>
    );

    mockedCart.forEach((phone) => {
      expect(screen.getByText(phone.name)).toBeInTheDocument();
    });
  });
});
