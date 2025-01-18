import { render, screen, cleanup } from "@testing-library/react";
import { describe, it, expect, afterEach } from "vitest";
import { MemoryRouter } from "react-router-dom";
import App from "./App.jsx";

describe("App", () => {
  afterEach(cleanup);

  it("renders the heading and Phones page", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );

    const heading = screen.getByRole("heading", { name: "Zara Challenge" });
    const secondHeading = screen.getByRole("heading", {
      name: "List of phones",
      level: 2,
    });

    expect(heading).not.toBeNull();
    expect(secondHeading).not.toBeNull();
  });

  it("renders the heading and Phone detail when navigate to /phone/123", () => {
    render(
      <MemoryRouter initialEntries={["/phone/123"]}>
        <App />
      </MemoryRouter>
    );

    const heading = screen.getByRole("heading", { name: "Zara Challenge" });
    const secondHeading = screen.getByRole("heading", {
      name: "Phone detail",
      level: 2,
    });

    expect(heading).not.toBeNull();
    expect(secondHeading).not.toBeNull();
  });
});
