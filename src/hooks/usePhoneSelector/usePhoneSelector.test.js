import { renderHook, act } from "@testing-library/react";
import { usePhoneSelector } from "./usePhoneSelector";
import { useCartActions } from "../useCartActions/useCartActions";
import { vi, describe, it, expect, beforeEach, afterEach } from "vitest";

vi.mock("../useCartActions/useCartActions");
vi.mock("uuid", () => ({ v4: () => "unique-cart-id" }));
vi.mock("react-router-dom", () => ({
  useParams: () => ({ phoneId: "Initial-Phone-id" }),
}));

describe("usePhoneSelector", () => {
  const initialPhone = {
    imageUrl: "initial-image-url",
    name: "Initial Phone",
    hexCode: "#000000",
  };

  const name = "Initial Phone name";
  const id = "Initial-Phone-id";

  const colorOptions = [
    { imageUrl: "image-url-1", name: "Color 1", hexCode: "#111111" },
    { imageUrl: "image-url-2", name: "Color 2", hexCode: "#222222" },
  ];

  const storageOptions = { capacity: "128GB", price: 999 };

  const saveToCartMock = vi.fn();

  beforeEach(() => {
    useCartActions.mockReturnValue({ saveToCart: saveToCartMock });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("should initialize with the initial phone color", () => {
    const { result } = renderHook(() =>
      usePhoneSelector(initialPhone, colorOptions)
    );

    expect(result.current.selectedColor).toEqual({
      imageUrl: "initial-image-url",
      name: "Initial Phone",
      hexCode: "#000000",
    });
    expect(result.current.selectedStorage).toBeNull();
  });

  it("should update selected color when handleColorChange is called", () => {
    const { result } = renderHook(() =>
      usePhoneSelector(initialPhone, colorOptions)
    );

    act(() => {
      result.current.handleColorChange("#111111");
    });

    expect(result.current.selectedColor).toEqual({
      imageUrl: "image-url-1",
      name: "Color 1",
      hexCode: "#111111",
    });
  });

  it("should update selected storage when handleStorageChange is called", () => {
    const { result } = renderHook(() =>
      usePhoneSelector(initialPhone, colorOptions)
    );

    act(() => {
      result.current.handleStorageChange(storageOptions);
    });

    expect(result.current.selectedStorage).toEqual({
      capacity: "128GB",
      price: 999,
    });
  });

  it("should call saveToCart with the correct phone details when handleSubmitPhone is called", () => {
    const { result } = renderHook(() =>
      usePhoneSelector(initialPhone, colorOptions, name)
    );

    act(() => {
      result.current.handleColorChange("#111111");
      result.current.handleStorageChange(storageOptions);
    });

    act(() => {
      result.current.handleSubmitPhone();
    });

    expect(saveToCartMock).toHaveBeenCalledWith({
      id,
      name,
      colorName: "Color 1",
      imageUrl: "image-url-1",
      capacity: "128GB",
      price: 999,
      cartId: "unique-cart-id",
    });
  });
});
