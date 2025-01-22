import { mockedPhoneList } from "../phones/phones";

export const mockUsePhones = {
  phones: mockedPhoneList,
  totalPhones: 2,
};

export const mockUseCartInformationEmpty = {
  isCartVisible: false,
  havePurchases: false,
  phonesInCart: 0,
};

export const mockUseCartInformationVisible = {
  isCartVisible: true,
  havePurchases: false,
  phonesInCart: 0,
};

export const mockUseCartInformationWithPurchases = {
  isCartVisible: true,
  havePurchases: true,
  phonesInCart: 3,
};
