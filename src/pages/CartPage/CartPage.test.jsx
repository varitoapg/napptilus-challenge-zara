import { render, screen } from "@testing-library/react";
import { describe, it, expect, beforeEach, vi } from "vitest";
import CartPage from "./CartPage";
import { useCartInformation } from "../../hooks/useCartInformation/useCartInformation";
import { BrowserRouter } from "react-router-dom";
import { useCartContext } from "../../contexts/CartContext/CartContext";

vi.mock("../../contexts/CartContext/CartContext");
vi.mock("../../hooks/useCartInformation/useCartInformation");

describe("CartPage", () => {
  beforeEach(() => {
    useCartInformation.mockReturnValue({
      phonesInCart: 3,
      cart: [{ name: "Phone 1" }, { name: "Phone 2" }, { name: "Phone 3" }],
    });

    useCartContext.mockReturnValue({
      addPhoneToCart: vi.fn(),
      removePhoneFromCart: vi.fn(),
    });
  });

  it("should display the correct number of phones in cart", () => {
    render(
      <BrowserRouter>
        <CartPage />
      </BrowserRouter>
    );
    expect(screen.getByText("cart (3)")).toBeInTheDocument();
  });

  it("should render CartDisplay component with items", () => {
    render(
      <BrowserRouter>
        <CartPage />
      </BrowserRouter>
    );
    expect(screen.getByText("cart (3)")).toBeInTheDocument();
    expect(screen.getByText("Phone 1")).toBeInTheDocument();
    expect(screen.getByText("Phone 2")).toBeInTheDocument();
    expect(screen.getByText("Phone 3")).toBeInTheDocument();
  });

  it("should render PaymentSection component", () => {
    render(
      <BrowserRouter>
        <CartPage />
      </BrowserRouter>
    );
    expect(screen.getByText("cart (3)")).toBeInTheDocument();
    expect(screen.getByText("Total")).toBeInTheDocument();
  });
});
