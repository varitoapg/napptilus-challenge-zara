import { mockedPhoneList } from "../phones/phones";

export const mockUsePhones = {
  phones: mockedPhoneList,
  totalPhones: 2,
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
  cart: mockedPhoneList,
};
