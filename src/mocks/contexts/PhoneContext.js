import { vi } from "vitest";
import { mockedPhoneList } from "../phones/phones";

export const mockUsePhoneContextLoading = {
  phones: [],
  loading: true,
  error: null,
  loadPhones: vi.fn(),
};

export const mockUsePhoneContextWithPhones = {
  phones: mockedPhoneList,
  loading: false,
  error: null,
  loadPhones: vi.fn(),
};

export const mockUsePhoneContextWithError = {
  phones: [],
  loading: false,
  error: "Failed to load phones.",
  loadPhones: vi.fn(),
};
