import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { mockColorOptions } from "../../mocks/colors/colors";
import ColorSelector from "./ColorSelector";

describe("ColorSelector", () => {
  const handleSelection = vi.fn();

  it("renders color options", () => {
    render(
      <ColorSelector
        colorOptions={mockColorOptions}
        handleSelection={handleSelection}
        selectedColor={mockColorOptions[0]}
      />
    );
    mockColorOptions.forEach((option) => {
      const expectedLabel = screen.getByLabelText(option.name);

      expect(expectedLabel).toBeInTheDocument();
    });
  });

  it("calls handleSelection when a color is clicked", () => {
    const labelToSelect = mockColorOptions[1].name;
    render(
      <ColorSelector
        colorOptions={mockColorOptions}
        handleSelection={handleSelection}
        selectedColor={mockColorOptions[0]}
      />
    );
    const colorItem = screen.getByLabelText(labelToSelect);
    fireEvent.click(colorItem);

    expect(handleSelection).toHaveBeenCalledWith(mockColorOptions[1].hexCode);
  });

  it("applies selected class to the selected color", () => {
    const expectedSelectedColor = mockColorOptions[0].name;

    render(
      <ColorSelector
        colorOptions={mockColorOptions}
        handleSelection={handleSelection}
        selectedColor={mockColorOptions[0]}
      />
    );

    const selectedColorItem = screen.getByLabelText(expectedSelectedColor);

    expect(selectedColorItem).toHaveClass("color-selector__item--selected");
  });

  it("displays the name of the selected color", () => {
    const expectedLabel = mockColorOptions[0].name;
    render(
      <ColorSelector
        colorOptions={mockColorOptions}
        handleSelection={handleSelection}
        selectedColor={mockColorOptions[0]}
      />
    );

    const selectedLabel = screen.getByText(expectedLabel);

    expect(selectedLabel).toBeInTheDocument();
  });
});
