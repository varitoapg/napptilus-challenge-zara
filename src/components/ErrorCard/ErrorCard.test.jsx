import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import ErrorCard from "./ErrorCard";

describe("ErrorCard", () => {
  it("renders the error message", () => {
    const errorMessage = "This is an error message";
    render(<ErrorCard errorMessage={errorMessage} />);

    const messageElement = screen.getByText(/This is an error message/i);
    expect(messageElement).toBeInTheDocument();
  });

  it("renders the error icon", () => {
    const errorMessage = "This is an error message";
    render(<ErrorCard errorMessage={errorMessage} />);

    const iconElement = screen.getByText("⚠️");
    expect(iconElement).toBeInTheDocument();
  });

  it("renders the error message with strong tag", () => {
    const errorMessage = "This is an error message";
    render(<ErrorCard errorMessage={errorMessage} />);

    const strongElement = screen.getByText(/Error:/i);
    expect(strongElement).toBeInTheDocument();
    expect(strongElement.tagName).toBe("STRONG");
  });
});
