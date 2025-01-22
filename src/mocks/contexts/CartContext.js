import { vi } from "vitest";

export const mockUseCartContextEmpty = {
  cart: [],
  addPhoneToCart: vi.fn(),
  removePhoneFromCart: vi.fn(),
};
