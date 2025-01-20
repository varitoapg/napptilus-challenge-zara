import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import {
  getCartFromLocalStorage,
  saveCartToLocalStorage,
  removePhoneFromLocalStorage,
} from "./cartServices";

describe("cartServices", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe("getCartFromLocalStorage", () => {
    it("should return an empty array if no cart is stored", () => {
      expect(getCartFromLocalStorage()).toEqual([]);
    });

    it("should return the parsed cart if cart is stored", () => {
      const cart = [{ id: 1, name: "Phone 1" }];
      localStorage.setItem("cart", JSON.stringify(cart));
      expect(getCartFromLocalStorage()).toEqual(cart);
    });
  });

  describe("saveCartToLocalStorage", () => {
    it("should save the cart to localStorage", () => {
      const cart = [{ id: 1, name: "Phone 1" }];
      saveCartToLocalStorage(cart);
      expect(localStorage.getItem("cart")).toEqual(JSON.stringify(cart));
    });
  });

  describe("removePhoneFromLocalStorage", () => {
    it("should remove the phone with the given id from the cart", () => {
      const cart = [
        { id: 1, name: "Phone 1" },
        { id: 2, name: "Phone 2" },
      ];
      localStorage.setItem("cart", JSON.stringify(cart));
      removePhoneFromLocalStorage(1);
      expect(getCartFromLocalStorage()).toEqual([{ id: 2, name: "Phone 2" }]);
    });

    it("should do nothing if the phone id is not in the cart", () => {
      const cart = [{ id: 1, name: "Phone 1" }];
      localStorage.setItem("cart", JSON.stringify(cart));
      removePhoneFromLocalStorage(2);
      expect(getCartFromLocalStorage()).toEqual(cart);
    });
  });
});
