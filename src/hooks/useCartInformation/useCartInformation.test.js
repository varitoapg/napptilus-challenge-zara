import { cleanup, renderHook } from "@testing-library/react";
import { useLocation } from "react-router-dom";
import { useCartInformation } from "./useCartInformation";
import { vi, describe, it, expect, beforeEach } from "vitest";

vi.mock("react-router-dom", () => ({
  useLocation: vi.fn(),
}));

describe("useCartInformation", () => {
  beforeEach(() => {
    cleanup();
    vi.resetAllMocks();
  });

  it('should return isCartVisible as true when pathname does not include "cart"', () => {
    useLocation.mockReturnValue({ pathname: "/home" });
    vi.mock("../../contexts/CartContext/CartContext", () => ({
      useCartContext: vi.fn(() => ({
        cart: [],
      })),
    }));
    const { result } = renderHook(() => useCartInformation());
    expect(result.current.isCartVisible).toBe(true);
  });

  it('should return isCartVisible as false when pathname includes "cart"', () => {
    useLocation.mockReturnValue({ pathname: "/cart" });
    vi.mock("../../contexts/CartContext/CartContext", () => ({
      useCartContext: vi.fn(() => ({
        cart: [],
      })),
    }));
    const { result } = renderHook(() => useCartInformation());
    expect(result.current.isCartVisible).toBe(false);
  });

  it("should return total price as 300 and phonesInCart as 2", () => {
    useLocation.mockReturnValue({ pathname: "/home" });
    vi.mock("../../contexts/CartContext/CartContext", () => ({
      useCartContext: vi.fn(() => ({
        cart: [{ price: 100 }, { price: 200 }],
      })),
    }));
    const { result } = renderHook(() => useCartInformation());

    expect(result.current.phonesInCart).toBe(2);
    expect(result.current.totalPrice).toBe(300);
  });
});
