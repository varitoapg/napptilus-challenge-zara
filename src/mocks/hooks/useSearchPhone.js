import { vi } from "vitest";

export const mockUseSearchPhoneInitial = {
  searchQuery: "",
  setSearchQuery: vi.fn(),
  debouncedQuery: "",
  handlerClear: vi.fn(),
};

export const mockUseSearchPhoneWithQuery = {
  searchQuery: "Phone 1",
  setSearchQuery: vi.fn(),
  debouncedQuery: "Phone 1",
  handlerClear: vi.fn(),
};
