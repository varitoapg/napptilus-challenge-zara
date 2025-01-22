import { renderHook, act } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { vi, describe, beforeEach, afterEach, it, expect } from "vitest";
import { useCartActions } from "./useCartActions";
import { useCartContext } from "../../contexts/CartContext/CartContext";
import { mockedCart } from "../../mocks/cart/cart";

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
      result.current.saveToCart(mockedCart[0]);
    });

    expect(addPhoneToCart).toHaveBeenCalledWith(mockedCart[0]);
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
