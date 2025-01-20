import { renderHook, act } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { usePhoneSelector } from "./usePhoneSelector";

describe("usePhoneSelector", () => {
  const initialPhone = {
    hexCode: "#000000",
    imageUrl: "blackImage.jpg",
    name: "Black",
  };
  const colorOptions = [
    { hexCode: "#000000", imageUrl: "blackImage.jpg", name: "Black" },
    { hexCode: "#FFFFFF", imageUrl: "whiteImage.jpg", name: "White" },
  ];

  it("should initialize with the initial phone details", () => {
    const { result } = renderHook(() =>
      usePhoneSelector(initialPhone, colorOptions)
    );

    expect(result.current.selectedColor).toEqual({
      hexCode: initialPhone.hexCode,
      imageUrl: initialPhone.imageUrl,
      name: initialPhone.name,
    });
    expect(result.current.selectedStorage).toBeNull();
  });

  it("should update selected color when handleColorChange is called", () => {
    const { result } = renderHook(() =>
      usePhoneSelector(initialPhone, colorOptions)
    );

    act(() => {
      result.current.handleColorChange("#000000");
    });

    expect(result.current.selectedColor).toEqual({
      hexCode: "#000000",
      imageUrl: "blackImage.jpg",
      name: "Black",
    });
  });

  it("should update selected storage when handleStorageChange is called", () => {
    const { result } = renderHook(() =>
      usePhoneSelector(initialPhone, colorOptions)
    );
    const storage = { capacity: "128GB", price: 999 };

    act(() => {
      result.current.handleStorageChange(storage);
    });

    expect(result.current.selectedStorage).toEqual({
      capacity: "128GB",
      price: 999,
    });
  });
});
