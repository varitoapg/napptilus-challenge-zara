import { mockedPhoneList } from "../phones/phones";

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
