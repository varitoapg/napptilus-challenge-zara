import { renderHook, act } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { useCartActions } from "./useCartActions";
import { useCartContext } from "../../contexts/CartContext/CartContext";
import { vi, describe, beforeEach, afterEach, it, expect } from "vitest";

const mockedUseNavigate = vi.fn();
vi.mock("../../contexts/CartContext/CartContext");
vi.mock("react-router-dom", () => ({
  useNavigate: () => mockedUseNavigate,
  MemoryRouter: ({ children }) => children,
}));

describe("useCartActions", () => {
  const addPhoneToCart = vi.fn();
  const removePhoneFromCart = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();

    useCartContext.mockReturnValue({
      addPhoneToCart,
      removePhoneFromCart,
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("should add phone to cart", () => {
    const { result } = renderHook(() => useCartActions(), {
      wrapper: MemoryRouter,
    });

    act(() => {
      result.current.saveToCart({ id: 1, name: "Phone 1" });
    });

    expect(addPhoneToCart).toHaveBeenCalledWith({ id: 1, name: "Phone 1" });
  });

  it("should remove phone from cart", () => {
    const { result } = renderHook(() => useCartActions(), {
      wrapper: MemoryRouter,
    });

    act(() => {
      result.current.removeFromCart(1);
    });

    expect(removePhoneFromCart).toHaveBeenCalledWith(1);
  });
});
