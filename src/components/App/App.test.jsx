import { render, screen, cleanup } from "@testing-library/react";
import { describe, it, expect, afterEach, vi } from "vitest";
import { MemoryRouter } from "react-router-dom";
import { PhoneProvider } from "../../contexts/PhoneContext/PhoneContext";
import { mockUsePhones } from "../../mocks/hooks/usePhones";
import App from "./App.jsx";

describe("App", () => {
  afterEach(cleanup);

  vi.mock("../../hooks/usePhones/usePhones", () => ({
    usePhones: vi.fn().mockReturnValue(mockUsePhones),
  }));

  vi.mock("../../hooks/useCartInformation/useCartInformation", () => ({
    useCartInformation: vi.fn().mockReturnValue(mockUsePhones),
  }));

  it("renders the heading and Phones page", () => {
    const logoTestId = "logo";
    const expectedResults = "2 results";

    render(
      <MemoryRouter initialEntries={["/"]}>
        <PhoneProvider>
          <App />
        </PhoneProvider>
      </MemoryRouter>
    );

    const logo = screen.getByTestId(logoTestId);
    const totalPhones = screen.queryByText(expectedResults);

    expect(logo).not.toBeNull();
    expect(totalPhones).not.toBeNull();
  });
});
