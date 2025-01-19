import { renderHook } from "@testing-library/react";
import { useLocation } from "react-router-dom";
import { useCartInformation } from "./useCartInformation";
import { vi, describe, it, expect } from "vitest";

vi.mock("react-router-dom", () => ({
  useLocation: vi.fn(),
}));

describe("useCartInformation", () => {
  it('should return isCartVisible as true when pathname does not include "cart"', () => {
    useLocation.mockReturnValue({ pathname: "/home" });
    const { result } = renderHook(() => useCartInformation());
    expect(result.current.isCartVisible).toBe(true);
  });

  it('should return isCartVisible as false when pathname includes "cart"', () => {
    useLocation.mockReturnValue({ pathname: "/cart" });
    const { result } = renderHook(() => useCartInformation());
    expect(result.current.isCartVisible).toBe(false);
  });

  it("should return havePurchases as false and phonesInCart as 0", () => {
    useLocation.mockReturnValue({ pathname: "/home" });
    const { result } = renderHook(() => useCartInformation());
    expect(result.current.havePurchases).toBe(false);
    expect(result.current.phonesInCart).toBe(0);
  });
});
