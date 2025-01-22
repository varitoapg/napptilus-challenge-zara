import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import SearchPhoneInput from "./SearchPhoneInput";

describe("SearchPhoneInput", () => {
  beforeEach(cleanup);
  const mockOnSearchChange = vi.fn();
  const mockHandleClear = vi.fn();
  const placeHolderText = "Search for a smartphone...";

  it("renders the input element", () => {
    render(
      <SearchPhoneInput
        searchQuery=""
        onSearchChange={mockOnSearchChange}
        handleClear={mockHandleClear}
      />
    );
    const inputElement = screen.getByPlaceholderText(placeHolderText);
    expect(inputElement).not.toBeNull();
  });

  it("displays the correct value", () => {
    const searchQuery = "iPhone";

    render(
      <SearchPhoneInput
        searchQuery={searchQuery}
        onSearchChange={mockOnSearchChange}
        handleClear={mockHandleClear}
      />
    );

    const inputElement = screen.getByDisplayValue(searchQuery);

    expect(inputElement).not.toBeNull();
  });

  it("calls onSearchChange when the input value changes", () => {
    const textToSearch = "Samsung";

    render(
      <SearchPhoneInput
        searchQuery=""
        onSearchChange={mockOnSearchChange}
        handleClear={mockHandleClear}
      />
    );

    const inputElement = screen.getByPlaceholderText(placeHolderText);
    fireEvent.change(inputElement, { target: { value: textToSearch } });

    expect(mockOnSearchChange).toHaveBeenCalledWith(textToSearch);
  });
});
