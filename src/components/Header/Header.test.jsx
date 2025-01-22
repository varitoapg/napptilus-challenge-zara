import { cleanup, render, screen } from "@testing-library/react";
import { vi, describe, it, expect, beforeEach } from "vitest";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import Header from "./Header";
import { useCartInformation } from "../../hooks/useCartInformation/useCartInformation";
import {
  mockUseCartInformationEmpty,
  mockUseCartInformationVisible,
  mockUseCartInformationWithPurchases,
} from "../../mocks/hooks/useCartInformation";

vi.mock("../../hooks/useCartInformation/useCartInformation");

describe("Header", () => {
  beforeEach(cleanup);

  it("should render the logo", () => {
    const expectedLogoTestId = "logo";

    useCartInformation.mockReturnValue(mockUseCartInformationEmpty);

    render(
      <MemoryRouter initialEntries={["/phone/123"]}>
        <Header />
      </MemoryRouter>
    );

    const logo = screen.getByTestId(expectedLogoTestId);

    expect(logo).not.toBeNull();
  });

  it("should not render the cart when isCartVisible is false", () => {
    const expectedPhonesInCart = "0";
    const expectedEmptyCartIconTestId = "empty-cart-icon";
    const expectedFullCartIconTestId = "full-cart-icon";

    useCartInformation.mockReturnValue(mockUseCartInformationEmpty);

    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    const phonesInCart = screen.queryByText(expectedPhonesInCart);
    const emptyCartIcon = screen.queryByTestId(expectedEmptyCartIconTestId);
    const fullCartIcon = screen.queryByTestId(expectedFullCartIconTestId);

    expect(phonesInCart).toBeNull();
    expect(emptyCartIcon).toBeNull();
    expect(fullCartIcon).toBeNull();
  });

  it("should render the empty cart icon when there are no purchases", () => {
    const expectedPhonesInCart = "0";
    const expectedEmptyCartIconTestId = "empty-cart-icon";
    const expectedFullCartIconTestId = "full-cart-icon";

    useCartInformation.mockReturnValue(mockUseCartInformationVisible);

    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    const phonesInCart = screen.queryByText(expectedPhonesInCart);
    const emptyCartIcon = screen.queryByTestId(expectedEmptyCartIconTestId);
    const fullCartIcon = screen.queryByTestId(expectedFullCartIconTestId);

    expect(phonesInCart).not.toBeNull();
    expect(emptyCartIcon).not.toBeNull();
    expect(fullCartIcon).toBeNull();
  });

  it("should render the full cart icon when there are purchases", () => {
    const expectedPhonesInCart = "3";
    const expectedEmptyCartIconTestId = "empty-cart-icon";
    const expectedFullCartIconTestId = "full-cart-icon";

    useCartInformation.mockReturnValue(mockUseCartInformationWithPurchases);

    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    const phonesInCart = screen.queryByText(expectedPhonesInCart);
    const emptyCartIcon = screen.queryByTestId(expectedEmptyCartIconTestId);
    const fullCartIcon = screen.queryByTestId(expectedFullCartIconTestId);

    expect(phonesInCart).not.toBeNull();
    expect(emptyCartIcon).toBeNull();
    expect(fullCartIcon).not.toBeNull();
  });
});
