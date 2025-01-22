import { render, screen } from "@testing-library/react";
import { vi, describe, it, expect, beforeEach } from "vitest";
import { useWindowSize } from "@uidotdev/usehooks";
import PaymentSection from "./PaymentSection";
import { useCartInformation } from "../../hooks/useCartInformation/useCartInformation";
import { useCartActions } from "../../hooks/useCartActions/useCartActions";
import {
  mockUseCartInformationEmpty,
  mockUseCartInformationWithPurchases,
} from "../../mocks/hooks/useCartInformation";

vi.mock("@uidotdev/usehooks");
vi.mock("../../hooks/useCartInformation/useCartInformation");
vi.mock("../../hooks/useCartActions/useCartActions");

describe("PaymentSection", () => {
  const payButtonText = "Pay";

  const mockUseWindowSize = useWindowSize;
  const mockUseCartInformation = useCartInformation;
  const mockUseCartActions = useCartActions;

  beforeEach(() => {
    mockUseWindowSize.mockReturnValue({ width: 800 });
    mockUseCartInformation.mockReturnValue(mockUseCartInformationEmpty);
    mockUseCartActions.mockReturnValue({ handleContinueShopping: vi.fn() });
  });

  it("renders continue shopping button", () => {
    const expectedContinueButton = "Continue shopping";

    render(<PaymentSection />);

    const continueButton = screen.getByText(expectedContinueButton);

    expect(continueButton).toBeInTheDocument();
  });

  it("renders total price and pay button when cart is not empty and width is greater than 569", () => {
    mockUseCartInformation.mockReturnValue(mockUseCartInformationWithPurchases);

    render(<PaymentSection />);

    const expectedTotalPrice = screen.getByText(
      mockUseCartInformationWithPurchases.totalPrice + " EUR"
    );
    const expectedPayButton = screen.getByText(payButtonText);

    expect(expectedTotalPrice).toBeInTheDocument();
    expect(expectedPayButton).toBeInTheDocument();
  });

  it("renders total price and pay button when cart is not empty and width is less than or equal to 569", () => {
    mockUseWindowSize.mockReturnValue({ width: 500 });
    mockUseCartInformation.mockReturnValue(mockUseCartInformationWithPurchases);

    render(<PaymentSection />);

    const expectedTotalPrice = screen.getByText(
      mockUseCartInformationWithPurchases.totalPrice + " EUR"
    );
    const expectedPayButton = screen.getByText(payButtonText);

    expect(expectedTotalPrice).toBeInTheDocument();
    expect(expectedPayButton).toBeInTheDocument();
  });

  it("does not render total price and pay button when cart is empty", () => {
    mockUseCartInformation.mockReturnValue(mockUseCartInformationEmpty);

    render(<PaymentSection />);

    const expectedTotalPrice = screen.queryByText(
      mockUseCartInformationWithPurchases.totalPrice + " EUR"
    );
    const expectedPayButton = screen.queryByText(payButtonText);

    expect(expectedTotalPrice).not.toBeInTheDocument();
    expect(expectedPayButton).not.toBeInTheDocument();
  });
});
