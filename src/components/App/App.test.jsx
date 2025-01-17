import App from "./App.jsx";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

describe("App", () => {
  it("renders the heading", () => {
    render(<App />);

    const heading = screen.getByRole("heading", { name: "Zara Challenge" });

    expect(heading).toBeDefined();
  });
});
