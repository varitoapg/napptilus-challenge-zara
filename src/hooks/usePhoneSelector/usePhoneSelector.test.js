import { renderHook, act } from "@testing-library/react";
import { vi, describe, it, expect, beforeEach, afterEach } from "vitest";
import { usePhoneSelector } from "./usePhoneSelector";
import { useCartActions } from "../useCartActions/useCartActions";
import { mockColorOptions } from "../../mocks/colors/colors";
import { mockStorageOptions } from "../../mocks/storageOptions/storageOptions";

const initialPhoneId = "Initial-Phone-id";
const cartId = "unique-cart-id";

vi.mock("../useCartActions/useCartActions");
vi.mock("uuid", () => ({ v4: () => cartId }));
vi.mock("react-router-dom", () => ({
  useParams: () => ({ phoneId: initialPhoneId }),
}));

describe("usePhoneSelector", () => {
  const name = "Initial Phone name";
  // const initialPhone = {
  //   imageUrl: "initial-image-url",
  //   name: "Initial Phone",
  //   hexCode: "#000000",
  // };

  // const name = "Initial Phone name";
  // const id = "Initial-Phone-id";

  // const colorOptions = [
  //   { imageUrl: "image-url-1", name: "Color 1", hexCode: "#111111" },
  //   { imageUrl: "image-url-2", name: "Color 2", hexCode: "#222222" },
  // ];

  // const storageOptions = { capacity: "128GB", price: 999 };

  const saveToCartMock = vi.fn();

  beforeEach(() => {
    useCartActions.mockReturnValue({ saveToCart: saveToCartMock });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("should initialize with the initial phone color", () => {
    const { result } = renderHook(() =>
      usePhoneSelector(mockColorOptions[0], mockColorOptions, name)
    );

    expect(result.current.selectedColor).toEqual(mockColorOptions[0]);
    expect(result.current.selectedStorage).toBeNull();
  });

  it("should update selected color when handleColorChange is called", () => {
    const { result } = renderHook(() =>
      usePhoneSelector(mockColorOptions[0], mockColorOptions, name)
    );

    act(() => {
      result.current.handleColorChange(mockColorOptions[0].hexCode);
    });

    expect(result.current.selectedColor).toEqual(mockColorOptions[0]);
  });

  it("should update selected storage when handleStorageChange is called", () => {
    const { result } = renderHook(() =>
      usePhoneSelector(mockColorOptions[0], mockColorOptions, name)
    );

    act(() => {
      result.current.handleStorageChange(mockStorageOptions[1]);
    });

    expect(result.current.selectedStorage).toEqual(mockStorageOptions[1]);
  });

  it("should call saveToCart with the correct phone details when handleSubmitPhone is called", () => {
    const { result } = renderHook(() =>
      usePhoneSelector(mockColorOptions[0], mockColorOptions, name)
    );

    act(() => {
      result.current.handleColorChange(mockColorOptions[0].hexCode);
      result.current.handleStorageChange(mockStorageOptions[1]);
    });

    act(() => {
      result.current.handleSubmitPhone();
    });

    expect(saveToCartMock).toHaveBeenCalledWith({
      capacity: "128GB",
      cartId: "unique-cart-id",
      colorName: "Red",
      id: "Initial-Phone-id",
      imageUrl: "http://example.com/red.jpg",
      name: "Initial Phone name",
      price: 200,
    });
  });
});
