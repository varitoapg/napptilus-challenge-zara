import { cleanup, render, screen } from "@testing-library/react";
import { vi, describe, it, expect, beforeEach } from "vitest";
import Header from "./Header";
import { useCartInformation } from "../../hooks/useCartInformation/useCartInformation";
import { BrowserRouter, MemoryRouter } from "react-router-dom";

vi.mock("../../hooks/useCartInformation/useCartInformation");

describe("Header", () => {
  beforeEach(cleanup);

  it("should render the logo", () => {
    useCartInformation.mockReturnValue({
      isCartVisible: false,
      havePurchases: false,
      phonesInCart: 0,
    });

    render(
      <MemoryRouter initialEntries={["/phone/123"]}>
        <Header />
      </MemoryRouter>
    );

    const logo = screen.getByTestId("logo");
    const backLink = screen.queryByTestId("left-chevron-icon");

    expect(logo).not.toBeNull();
    expect(backLink).toBeInTheDocument();
  });

  it("should not render the cart when isCartVisible is false", () => {
    useCartInformation.mockReturnValue({
      isCartVisible: false,
      havePurchases: false,
      phonesInCart: 0,
    });

    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    const phonesInCart = screen.queryByText("0");
    const emptyCartIcon = screen.queryByTestId("empty-cart-icon");
    const fullCartIcon = screen.queryByTestId("full-cart-icon");

    expect(phonesInCart).toBeNull();
    expect(emptyCartIcon).toBeNull();
    expect(fullCartIcon).toBeNull();
  });

  it("should render the empty cart icon when there are no purchases", () => {
    useCartInformation.mockReturnValue({
      isCartVisible: true,
      havePurchases: false,
      phonesInCart: 0,
    });

    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    const phonesInCart = screen.queryByText("0");
    const emptyCartIcon = screen.queryByTestId("empty-cart-icon");
    const fullCartIcon = screen.queryByTestId("full-cart-icon");

    expect(phonesInCart).not.toBeNull();
    expect(emptyCartIcon).not.toBeNull();
    expect(fullCartIcon).toBeNull();
  });

  it("should render the full cart icon when there are purchases", () => {
    useCartInformation.mockReturnValue({
      isCartVisible: true,
      havePurchases: true,
      phonesInCart: 3,
    });

    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    const phonesInCart = screen.queryByText("3");
    const emptyCartIcon = screen.queryByTestId("empty-cart-icon");
    const fullCartIcon = screen.queryByTestId("full-cart-icon");

    expect(phonesInCart).not.toBeNull();
    expect(emptyCartIcon).toBeNull();
    expect(fullCartIcon).not.toBeNull();
  });
});
