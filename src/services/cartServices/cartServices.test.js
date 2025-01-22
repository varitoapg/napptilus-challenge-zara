import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import {
  getCartFromLocalStorage,
  saveCartToLocalStorage,
  removePhoneFromLocalStorage,
} from "./cartServices";
import { mockedCart } from "../../mocks/cart/cart";

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
      localStorage.setItem("cart", JSON.stringify(mockedCart));
      expect(getCartFromLocalStorage()).toEqual(mockedCart);
    });
  });

  describe("saveCartToLocalStorage", () => {
    it("should save the cart to localStorage", () => {
      saveCartToLocalStorage(mockedCart);
      expect(localStorage.getItem("cart")).toEqual(JSON.stringify(mockedCart));
    });
  });

  describe("removePhoneFromLocalStorage", () => {
    it("should remove the phone with the given id from the cart", () => {
      localStorage.setItem("cart", JSON.stringify(mockedCart));
      removePhoneFromLocalStorage(mockedCart[0].cartId);
      expect(getCartFromLocalStorage()).toEqual([mockedCart[1]]);
    });

    it("should do nothing if the phone id is not in the cart", () => {
      localStorage.setItem("cart", JSON.stringify([mockedCart[0]]));
      removePhoneFromLocalStorage(mockedCart[1].cartId);
      expect(getCartFromLocalStorage()).toEqual([mockedCart[0]]);
    });
  });
});
