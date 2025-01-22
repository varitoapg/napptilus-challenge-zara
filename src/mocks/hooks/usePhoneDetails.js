import { mockPhoneDetail } from "../phones/phones";
import { vi } from "vitest";

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
