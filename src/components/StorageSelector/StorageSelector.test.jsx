import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import StorageSelector from "./StorageSelector";
import { mockStorageOptions } from "../../mocks/storageOptions/storageOptions";

describe("StorageSelector", () => {
  const handleStorageChange = vi.fn();

  it("renders storage options", () => {
    render(
      <StorageSelector
        storageOptions={mockStorageOptions}
        handleStorageChange={handleStorageChange}
        selectedStorage={mockStorageOptions[1]}
      />
    );

    mockStorageOptions.forEach((option) => {
      const expectedStorageOption = screen.getByText(option.capacity);
      expect(expectedStorageOption).toBeInTheDocument();
    });
  });

  it("calls handleStorageChange when a button is clicked", () => {
    render(
      <StorageSelector
        storageOptions={mockStorageOptions}
        handleStorageChange={handleStorageChange}
        selectedStorage={mockStorageOptions[1]}
      />
    );

    const button = screen.getByText(mockStorageOptions[0].capacity);
    fireEvent.click(button);

    expect(handleStorageChange).toHaveBeenCalledWith(mockStorageOptions[0]);
  });

  it("applies selected class to the selected storage option", () => {
    render(
      <StorageSelector
        storageOptions={mockStorageOptions}
        handleStorageChange={handleStorageChange}
        selectedStorage={mockStorageOptions[1]}
      />
    );

    const selectedButton = screen.getByText(mockStorageOptions[1].capacity);

    expect(selectedButton).toHaveClass("storage-selector__button--selected");
  });

  it("applies no-selected class to the non-selected storage options", () => {
    render(
      <StorageSelector
        storageOptions={mockStorageOptions}
        handleStorageChange={handleStorageChange}
        selectedStorage={mockStorageOptions[1]}
      />
    );

    const nonSelectedButton = screen.queryByText(
      mockStorageOptions[0].capacity
    );

    expect(nonSelectedButton).toHaveClass(
      "storage-selector__button--no-selected"
    );
  });
});
