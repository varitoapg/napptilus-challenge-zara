import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import ColorSelector from "./ColorSelector";

describe("ColorSelector", () => {
  const colorOptions = [
    { hexCode: "#FF0000", name: "Red" },
    { hexCode: "#00FF00", name: "Green" },
    { hexCode: "#0000FF", name: "Blue" },
  ];

  const handleSelection = vi.fn();
  const selectedColor = { hexCode: "#FF0000", name: "Red" };

  it("renders color options", () => {
    render(
      <ColorSelector
        colorOptions={colorOptions}
        handleSelection={handleSelection}
        selectedColor={selectedColor}
      />
    );
    colorOptions.forEach((option) => {
      expect(screen.getByLabelText(option.name)).toBeInTheDocument();
    });
  });

  it("calls handleSelection when a color is clicked", () => {
    render(
      <ColorSelector
        colorOptions={colorOptions}
        handleSelection={handleSelection}
        selectedColor={selectedColor}
      />
    );
    const colorItem = screen.getByLabelText("Green");
    fireEvent.click(colorItem);
    expect(handleSelection).toHaveBeenCalledWith("#00FF00");
  });

  it("applies selected class to the selected color", () => {
    render(
      <ColorSelector
        colorOptions={colorOptions}
        handleSelection={handleSelection}
        selectedColor={selectedColor}
      />
    );
    const selectedColorItem = screen.getByLabelText("Red");
    expect(selectedColorItem).toHaveClass("color-selector__item--selected");
  });

  it("displays the name of the selected color", () => {
    render(
      <ColorSelector
        colorOptions={colorOptions}
        handleSelection={handleSelection}
        selectedColor={selectedColor}
      />
    );
    expect(screen.getByText("Red")).toBeInTheDocument();
  });
});
