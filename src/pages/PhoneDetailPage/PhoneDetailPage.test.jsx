import { render, screen } from "@testing-library/react";
import { vi, describe, it, expect, beforeEach } from "vitest";
import PhoneDetailPage from "./PhoneDetailPage";
import { usePhoneDetails } from "../../hooks/usePhoneDetails/usePhoneDetails";
import { BrowserRouter } from "react-router-dom";
import { useCartContext } from "../../contexts/CartContext/CartContext";

vi.mock("../../hooks/usePhoneDetails/usePhoneDetails");

vi.mock("../../contexts/CartContext/CartContext", () => ({
  useCartContext: vi.fn(),
}));

describe("PhoneDetailPage", () => {
  beforeEach(() => {
    useCartContext.mockReturnValue({
      cart: [],
      addPhoneToCart: vi.fn(),
      removePhoneFromCart: vi.fn(),
    });
  });

  it("renders PhoneForm, PhoneSpecifications, and PhoneCardList when phoneDetails is available", () => {
    const mockPhoneDetails = {
      colorOptions: ["Black", "White"],
      name: "Test Phone",
      basePrice: 999,
      storageOptions: ["64GB", "128GB"],
      specs: { screen: "6.1 inch", battery: "3000mAh" },
      similarProducts: [
        { id: 1, name: "Similar Phone 1" },
        { id: 2, name: "Similar Phone 2" },
      ],
    };

    usePhoneDetails.mockReturnValue({ phoneDetails: mockPhoneDetails });

    render(
      <BrowserRouter>
        <PhoneDetailPage />
      </BrowserRouter>
    );

    expect(screen.getByText("Test Phone")).toBeInTheDocument();
    expect(screen.getByText("6.1 inch")).toBeInTheDocument();
    expect(screen.getByText("Similar Items")).toBeInTheDocument();
  });

  it("does not render content when phoneDetails is not available", () => {
    usePhoneDetails.mockReturnValue({ phoneDetails: null });

    render(
      <BrowserRouter>
        <PhoneDetailPage />
      </BrowserRouter>
    );

    expect(screen.queryByText("Similar Items")).not.toBeInTheDocument();
  });
});
