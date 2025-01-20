import { render, screen, fireEvent } from "@testing-library/react";
import StorageSelector from "./StorageSelector";
import { describe, it, expect, vi } from "vitest";

describe("StorageSelector", () => {
  const storageOptions = [
    { capacity: "64GB", price: 100 },
    { capacity: "128GB", price: 200 },
    { capacity: "256GB", price: 300 },
  ];

  const handleStorageChange = vi.fn();
  const selectedStorage = { capacity: "128GB", price: 200 };

  it("renders storage options", () => {
    render(
      <StorageSelector
        storageOptions={storageOptions}
        handleStorageChange={handleStorageChange}
        selectedStorage={selectedStorage}
      />
    );

    storageOptions.forEach((option) => {
      expect(screen.getByText(option.capacity)).toBeInTheDocument();
    });
  });

  it("calls handleStorageChange when a button is clicked", () => {
    render(
      <StorageSelector
        storageOptions={storageOptions}
        handleStorageChange={handleStorageChange}
        selectedStorage={selectedStorage}
      />
    );

    const button = screen.getByText("64GB");
    fireEvent.click(button);

    expect(handleStorageChange).toHaveBeenCalledWith(storageOptions[0]);
  });

  it("applies selected class to the selected storage option", () => {
    render(
      <StorageSelector
        storageOptions={storageOptions}
        handleStorageChange={handleStorageChange}
        selectedStorage={selectedStorage}
      />
    );

    const selectedButton = screen.getByText("128GB");
    expect(selectedButton).toHaveClass("storage-selector__button--selected");
  });

  it("applies no-selected class to the non-selected storage options", () => {
    render(
      <StorageSelector
        storageOptions={storageOptions}
        handleStorageChange={handleStorageChange}
        selectedStorage={selectedStorage}
      />
    );

    const nonSelectedButton = screen.getByText("64GB");
    expect(nonSelectedButton).toHaveClass(
      "storage-selector__button--no-selected"
    );
  });
});
