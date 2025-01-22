import {
  render,
  screen,
  fireEvent,
  waitFor,
  cleanup,
} from "@testing-library/react";
import { vi, describe, beforeEach, expect, it, afterEach } from "vitest";
import { BrowserRouter } from "react-router-dom";
import PhonesPage from "./PhonesPage";
import { PhoneProvider } from "../../contexts/PhoneContext/PhoneContext";
import { CartProvider } from "../../contexts/CartContext/CartContext";
import { usePhones } from "../../hooks/usePhones/usePhones";
import { useSearchPhone } from "../../hooks/useSearchPhone/useSearchPhone";
import {
  mockUseSearchPhoneInitial,
  mockUseSearchPhoneWithQuery,
} from "../../mocks/hooks/useSearchPhone";

import {
  mockUsePhones,
  mockUsePhonesLoading,
  mockUsePhonesWithError,
} from "../../mocks/hooks/usePhones";
import { mockedPhoneList } from "../../mocks/phones/phones";

vi.mock("../../hooks/usePhones/usePhones");
vi.mock("../../hooks/useSearchPhone/useSearchPhone");

describe("PhonesPage", () => {
  beforeEach(() => {
    useSearchPhone.mockReturnValue(mockUseSearchPhoneInitial);
  });

  afterEach(cleanup);

  const placeholderText = "Search for a smartphone...";

  it("should render search input and phone list", async () => {
    const resultsText = "2 results";
    usePhones.mockReturnValueOnce(mockUsePhones);

    render(
      <BrowserRouter>
        <PhoneProvider>
          <CartProvider>
            <PhonesPage />
          </CartProvider>
        </PhoneProvider>
      </BrowserRouter>
    );

    const expectedPlaceholder = screen.getByPlaceholderText(placeholderText);
    const expectedResults = screen.getByText(resultsText);
    const expectedFirstPhone = screen.getByText(mockedPhoneList[0].name);
    const expectedSecondPhone = screen.getByText(mockedPhoneList[1].name);

    expect(expectedPlaceholder).not.toBeNull();
    expect(expectedResults).not.toBeNull();

    expect(expectedFirstPhone).not.toBeNull();
    expect(expectedSecondPhone).not.toBeNull();
  });

  it("should update search query and results count on input change", async () => {
    usePhones.mockReturnValueOnce(mockUsePhones);

    useSearchPhone.mockReturnValueOnce(mockUseSearchPhoneWithQuery);
    render(
      <BrowserRouter>
        <PhoneProvider>
          <CartProvider>
            <PhonesPage />
          </CartProvider>
        </PhoneProvider>
      </BrowserRouter>
    );

    const input = screen.getByPlaceholderText("Search for a smartphone...");

    fireEvent.change(input, {
      target: { value: "Phone 1" },
    });

    await waitFor(() => {
      const expectedFirstPhone = screen.queryByText(mockedPhoneList[0].name);

      expect(expectedFirstPhone).not.toBeNull();
      expect(/1 results/).not.toBeNull();
    });
  });

  it("should show loader when loading", async () => {
    const loaderTextId = "loader";
    usePhones.mockReturnValueOnce(mockUsePhonesLoading);

    render(
      <BrowserRouter>
        <PhoneProvider>
          <CartProvider>
            <PhonesPage />
          </CartProvider>
        </PhoneProvider>
      </BrowserRouter>
    );

    const loader = screen.getByTestId(loaderTextId);

    expect(loader).not.toBeNull();
  });

  it("should show error when an error happens", async () => {
    const errorMessage = mockUsePhonesWithError.error;
    usePhones.mockReturnValueOnce(mockUsePhonesWithError);

    render(
      <BrowserRouter>
        <PhoneProvider>
          <CartProvider>
            <PhonesPage />
          </CartProvider>
        </PhoneProvider>
      </BrowserRouter>
    );

    const error = screen.getByText(errorMessage);

    expect(error).not.toBeNull();
  });
});
