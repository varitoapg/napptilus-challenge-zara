import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import SearchPhoneInput from "./SearchPhoneInput";

describe("SearchPhoneInput", () => {
  beforeEach(cleanup);
  const mockOnSearchChange = vi.fn();

  it("renders the input element", () => {
    render(
      <SearchPhoneInput searchQuery="" onSearchChange={mockOnSearchChange} />
    );
    const inputElement = screen.getByPlaceholderText(
      "Search for a smartphone..."
    );
    expect(inputElement).not.toBeNull();
  });

  it("displays the correct value", () => {
    render(
      <SearchPhoneInput
        searchQuery="iPhone"
        onSearchChange={mockOnSearchChange}
      />
    );
    const inputElement = screen.getByDisplayValue("iPhone");
    expect(inputElement).not.toBeNull();
  });

  it("calls onSearchChange when the input value changes", () => {
    render(
      <SearchPhoneInput searchQuery="" onSearchChange={mockOnSearchChange} />
    );
    const inputElement = screen.getByPlaceholderText(
      "Search for a smartphone..."
    );
    fireEvent.change(inputElement, { target: { value: "Samsung" } });
    expect(mockOnSearchChange).toHaveBeenCalledWith("Samsung");
  });
});
