import { render, screen } from "@testing-library/react";
import { describe, it, expect, beforeEach, vi } from "vitest";
import { BrowserRouter } from "react-router-dom";
import CartPage from "./CartPage";
import { useCartInformation } from "../../hooks/useCartInformation/useCartInformation";
import { useCartContext } from "../../contexts/CartContext/CartContext";
import { mockUseCartInformationWithPurchases } from "../../mocks/hooks/useCartInformation";
import { mockedPhoneList } from "../../mocks/phones/phones";

vi.mock("../../contexts/CartContext/CartContext");
vi.mock("../../hooks/useCartInformation/useCartInformation");

describe("CartPage", () => {
  beforeEach(() => {
    useCartInformation.mockReturnValue(mockUseCartInformationWithPurchases);

    useCartContext.mockReturnValue({
      addPhoneToCart: vi.fn(),
      removePhoneFromCart: vi.fn(),
    });
  });

  const phonesInCartText = "cart (3)";

  it("should display the correct number of phones in cart", () => {
    render(
      <BrowserRouter>
        <CartPage />
      </BrowserRouter>
    );

    const expectedText = screen.getByText(phonesInCartText);
    expect(expectedText).toBeInTheDocument();
  });

  it("should render CartDisplay component with items", () => {
    render(
      <BrowserRouter>
        <CartPage />
      </BrowserRouter>
    );

    const expectedText = screen.getByText(phonesInCartText);
    const expectedFirstPhone = screen.getByText(mockedPhoneList[0].name);
    const expectedSecondPhone = screen.getByText(mockedPhoneList[1].name);

    expect(expectedText).toBeInTheDocument();
    expect(expectedFirstPhone).toBeInTheDocument();
    expect(expectedSecondPhone).toBeInTheDocument();
  });

  it("should render PaymentSection component", () => {
    const totalText = "Total";
    render(
      <BrowserRouter>
        <CartPage />
      </BrowserRouter>
    );

    const expectedText = screen.getByText(phonesInCartText);
    const expectedPaymentSection = screen.getByText(totalText);

    expect(expectedText).toBeInTheDocument();
    expect(expectedPaymentSection).toBeInTheDocument();
  });
});
