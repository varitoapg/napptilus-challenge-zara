import { render, screen } from "@testing-library/react";
import { vi, describe, it, expect, beforeEach } from "vitest";
import PaymentSection from "./PaymentSection";
import { useWindowSize } from "@uidotdev/usehooks";
import { useCartInformation } from "../../hooks/useCartInformation/useCartInformation";
import { useCartActions } from "../../hooks/useCartActions/useCartActions";

vi.mock("@uidotdev/usehooks");
vi.mock("../../hooks/useCartInformation/useCartInformation");
vi.mock("../../hooks/useCartActions/useCartActions");

describe("PaymentSection", () => {
  const mockUseWindowSize = useWindowSize;
  const mockUseCartInformation = useCartInformation;
  const mockUseCartActions = useCartActions;

  beforeEach(() => {
    mockUseWindowSize.mockReturnValue({ width: 800 });
    mockUseCartInformation.mockReturnValue({ cart: [], totalPrice: 0 });
    mockUseCartActions.mockReturnValue({ handleContinueShopping: vi.fn() });
  });

  it("renders continue shopping button", () => {
    render(<PaymentSection />);
    expect(screen.getByText("Continue shopping")).toBeInTheDocument();
  });

  it("renders total price and pay button when cart is not empty and width is greater than 569", () => {
    mockUseCartInformation.mockReturnValue({
      cart: [{ id: 1 }],
      totalPrice: 123,
    });
    render(<PaymentSection />);
    expect(screen.getByText("123 EUR")).toBeInTheDocument();
    expect(screen.getByText("Pay")).toBeInTheDocument();
  });

  it("renders total price and pay button when cart is not empty and width is less than or equal to 569", () => {
    mockUseWindowSize.mockReturnValue({ width: 500 });
    mockUseCartInformation.mockReturnValue({
      cart: [{ id: 1 }],
      totalPrice: 123,
    });
    render(<PaymentSection />);
    expect(screen.getByText("123 EUR")).toBeInTheDocument();
    expect(screen.getByText("Pay")).toBeInTheDocument();
  });

  it("does not render total price and pay button when cart is empty", () => {
    render(<PaymentSection />);
    expect(screen.queryByText("123 EUR")).not.toBeInTheDocument();
    expect(screen.queryByText("Pay")).not.toBeInTheDocument();
  });
});
