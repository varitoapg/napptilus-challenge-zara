import { renderHook, act } from "@testing-library/react";
import { useCartActions } from "./useCartActions";
import { useCartContext } from "../../contexts/CartContext/CartContext";
import { vi, describe, beforeEach, afterEach, it, expect } from "vitest";

vi.mock("../../contexts/CartContext/CartContext");

describe("useCartActions", () => {
  const addPhoneToCart = vi.fn();
  const removePhoneFromCart = vi.fn();

  beforeEach(() => {
    useCartContext.mockReturnValue({
      addPhoneToCart,
      removePhoneFromCart,
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("should add phone to cart", () => {
    const { result } = renderHook(() => useCartActions());

    act(() => {
      result.current.saveToCart({ id: 1, name: "Phone 1" });
    });

    expect(addPhoneToCart).toHaveBeenCalledWith({ id: 1, name: "Phone 1" });
  });

  it("should remove phone from cart", () => {
    const { result } = renderHook(() => useCartActions());

    act(() => {
      result.current.removeFromCart(1);
    });

    expect(removePhoneFromCart).toHaveBeenCalledWith(1);
  });
});
