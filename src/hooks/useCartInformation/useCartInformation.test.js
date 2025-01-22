import { cleanup, renderHook } from "@testing-library/react";
import { useLocation } from "react-router-dom";
import { useCartInformation } from "./useCartInformation";
import { vi, describe, it, expect, beforeEach } from "vitest";
import { mockedCart } from "../../mocks/cart/cart";

vi.mock("react-router-dom", () => ({
  useLocation: vi.fn(),
}));

describe("useCartInformation", () => {
  beforeEach(() => {
    cleanup();
    vi.resetAllMocks();
  });

  const homePath = "/home";
  const cartPath = "/cart";
  it('should return isCartVisible as true when pathname does not include "cart"', () => {
    useLocation.mockReturnValue({ pathname: homePath });

    vi.mock("../../contexts/CartContext/CartContext", () => ({
      useCartContext: vi.fn(() => ({
        cart: [],
      })),
    }));

    const { result } = renderHook(() => useCartInformation());

    expect(result.current.isCartVisible).toBe(true);
  });

  it('should return isCartVisible as false when pathname includes "cart"', () => {
    useLocation.mockReturnValue({ pathname: cartPath });

    vi.mock("../../contexts/CartContext/CartContext", () => ({
      useCartContext: vi.fn(() => ({
        cart: [],
      })),
    }));

    const { result } = renderHook(() => useCartInformation());

    expect(result.current.isCartVisible).toBe(false);
  });

  it("should return total price as 300 and phonesInCart as 2", () => {
    const expectedTotalPrice = 300;
    const expectedPhonesInCart = 2;
    useLocation.mockReturnValue({ pathname: homePath });

    vi.mock("../../contexts/CartContext/CartContext", () => ({
      useCartContext: vi.fn(() => ({
        cart: mockedCart,
      })),
    }));
    const { result } = renderHook(() => useCartInformation());

    expect(result.current.phonesInCart).toBe(expectedPhonesInCart);
    expect(result.current.totalPrice).toBe(expectedTotalPrice);
  });
});
