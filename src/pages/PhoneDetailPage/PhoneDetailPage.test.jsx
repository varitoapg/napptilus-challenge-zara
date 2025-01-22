import { render, screen } from "@testing-library/react";
import { vi, describe, it, expect, beforeEach } from "vitest";
import { BrowserRouter } from "react-router-dom";
import PhoneDetailPage from "./PhoneDetailPage";
import { usePhoneDetails } from "../../hooks/usePhoneDetails/usePhoneDetails";
import { useCartContext } from "../../contexts/CartContext/CartContext";
import { mockUseCartContextEmpty } from "../../mocks/contexts/CartContext";
import {
  mockUsePhoneDetailsWithPhone,
  mockUsePhoneDetailsLoading,
  mockUsePhoneDetailsWithError,
} from "../../mocks/hooks/hooks";
import { mockPhoneDetail } from "../../mocks/phones/phones";

vi.mock("../../hooks/usePhoneDetails/usePhoneDetails");

vi.mock("../../contexts/CartContext/CartContext", () => ({
  useCartContext: vi.fn(),
}));

describe("PhoneDetailPage", () => {
  beforeEach(() => {
    useCartContext.mockReturnValue(mockUseCartContextEmpty);
  });

  it("renders PhoneForm, PhoneSpecifications, and PhoneCardList when phoneDetails is available", () => {
    usePhoneDetails.mockReturnValueOnce(mockUsePhoneDetailsWithPhone);

    render(
      <BrowserRouter>
        <PhoneDetailPage />
      </BrowserRouter>
    );

    const expectdPhoneName = screen.getByText(mockPhoneDetail.name);
    const expectedSpecs = screen.getByText(mockPhoneDetail.specs.screen);
    const expectedSimilarItems = screen.getByText(
      mockPhoneDetail.similarProducts[0].name
    );

    expect(expectdPhoneName).toBeInTheDocument();
    expect(expectedSpecs).toBeInTheDocument();
    expect(expectedSimilarItems).toBeInTheDocument();
  });

  it("does not render content when phoneDetails is not available", () => {
    usePhoneDetails.mockReturnValueOnce(mockUsePhoneDetailsLoading);

    render(
      <BrowserRouter>
        <PhoneDetailPage />
      </BrowserRouter>
    );

    const expectedSimilarItems = screen.queryByText(
      mockPhoneDetail.similarProducts[0].name
    );

    expect(expectedSimilarItems).not.toBeInTheDocument();
  });

  it("renders Loader when loading is true", () => {
    const loaderTestId = "loader";
    usePhoneDetails.mockReturnValueOnce(mockUsePhoneDetailsLoading);

    render(
      <BrowserRouter>
        <PhoneDetailPage />
      </BrowserRouter>
    );

    const loader = screen.getByTestId(loaderTestId);

    expect(loader).toBeInTheDocument();
  });

  it("renders an error card when error happens", () => {
    const errorMessage = "Failed to load phone details.";
    usePhoneDetails.mockReturnValueOnce(mockUsePhoneDetailsWithError);

    render(
      <BrowserRouter>
        <PhoneDetailPage />
      </BrowserRouter>
    );

    const errorCard = screen.getByText(errorMessage);

    expect(errorCard).toBeInTheDocument();
  });
});
