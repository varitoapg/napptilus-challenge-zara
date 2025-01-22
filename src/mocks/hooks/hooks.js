import { mockedPhoneList, mockPhoneDetail } from "../phones/phones";
import { mockedCart } from "../cart/cart";
import { vi } from "vitest";

export const mockUsePhones = {
  phones: mockedPhoneList,
  totalPhones: 2,
  loading: false,
  error: null,
};

export const mockUsePhonesLoading = {
  phones: [],
  totalPhones: 0,
  loading: true,
  error: null,
};

export const mockUsePhonesWithError = {
  phones: [],
  totalPhones: 0,
  loading: true,
  error: "An error occurred",
};

export const mockUsePhoneDetailsLoading = {
  phoneDetails: null,
  loading: true,
  error: null,
  loadPhoneDetails: vi.fn(),
};

export const mockUsePhoneDetailsWithPhone = {
  phoneDetails: mockPhoneDetail,
  loading: false,
  error: null,
  loadPhoneDetails: vi.fn(),
};

export const mockUsePhoneDetailsWithError = {
  phoneDetails: null,
  loading: false,
  error: "Failed to load phone details.",
  loadPhoneDetails: vi.fn(),
};

export const mockUseCartInformationEmpty = {
  isCartVisible: false,
  havePurchases: false,
  phonesInCart: 0,
  totalPrice: 0,
  cart: [],
};

export const mockUseCartInformationVisible = {
  isCartVisible: true,
  havePurchases: false,
  phonesInCart: 0,
  totalPrice: 0,
  cart: [],
};

export const mockUseCartInformationWithPurchases = {
  isCartVisible: true,
  havePurchases: true,
  phonesInCart: 3,
  totalPrice: 300,
  cart: mockedCart,
};
