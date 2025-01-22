import { cleanup, render, screen } from "@testing-library/react";
import Button from "./Button";
import { describe, it, expect, beforeEach } from "vitest";

describe("Button component", () => {
  beforeEach(cleanup);
  const buttonText = "Click me";

  it("renders the button with children", () => {
    render(<Button>{buttonText}</Button>);

    const buttonElement = screen.getByText(/click me/i);

    expect(buttonElement).toBeInTheDocument();
  });

  it("applies the default theme", () => {
    render(<Button>{buttonText}</Button>);

    const buttonElement = screen.getByText(/click me/i);

    expect(buttonElement).toHaveClass("custom-button black");
  });

  it("applies the white theme", () => {
    render(<Button theme="white">{buttonText}</Button>);

    const buttonElement = screen.getByText(/click me/i);

    expect(buttonElement).toHaveClass("custom-button white");
  });

  it("applies the disabled state", () => {
    render(<Button disabled>{buttonText}</Button>);

    const buttonElement = screen.getByText(/click me/i);

    expect(buttonElement).toBeDisabled();
    expect(buttonElement).toHaveClass("disabled");
  });

  it("passes additional props to the button element", () => {
    render(<Button data-testid="custom-button">{buttonText}</Button>);

    const buttonElement = screen.getByTestId("custom-button");

    expect(buttonElement).toBeInTheDocument();
  });
});
