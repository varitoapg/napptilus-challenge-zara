import { render, screen, cleanup } from "@testing-library/react";
import { describe, it, expect, afterEach, vi } from "vitest";
import { MemoryRouter } from "react-router-dom";
import { PhoneProvider } from "../../contexts/PhoneContext/PhoneContext";
import App from "./App.jsx";

describe("App", () => {
  afterEach(cleanup);

  vi.mock("../../hooks/usePhones/usePhones", () => ({
    usePhones: vi.fn().mockReturnValue({
      phones: [
        { id: 1, name: "Phone 1" },
        { id: 2, name: "Phone 2" },
      ],
      totalPhones: 2,
    }),
  }));

  it("renders the heading and Phones page", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <PhoneProvider>
          <App />
        </PhoneProvider>
      </MemoryRouter>
    );

    const logo = screen.getByTestId("logo");
    const totalPhones = screen.queryByText("2 results");

    expect(logo).not.toBeNull();
    expect(totalPhones).not.toBeNull();
  });

  it("renders the heading and Phone detail when navigate to /phone/123", () => {
    render(
      <MemoryRouter initialEntries={["/phone/123"]}>
        <App />
      </MemoryRouter>
    );

    const logo = screen.getByTestId("logo");
    const secondHeading = screen.getByRole("heading", {
      name: "Phone detail",
      level: 2,
    });

    expect(logo).not.toBeNull();
    expect(secondHeading).not.toBeNull();
  });
});
