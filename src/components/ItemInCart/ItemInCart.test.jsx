import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import ItemInCart from "./ItemInCart";
import { useCartActions } from "../../hooks/useCartActions/useCartActions";
import { mockedCart } from "../../mocks/cart/cart";

vi.mock("../../hooks/useCartActions/useCartActions");

describe("ItemInCart", () => {
  const removeFromCart = vi.fn();

  beforeEach(() => {
    useCartActions.mockReturnValue({ removeFromCart });
  });

  it("renders phone details correctly", () => {
    render(<ItemInCart phone={mockedCart[0]} />);

    const expectedFullName = screen.getByAltText(
      `${mockedCart[0].name} ${mockedCart[0].colorName}`
    );

    const expectedName = screen.getByText(mockedCart[0].name);
    const expectedStorageAndColor = screen.getByText(
      `${mockedCart[0].capacity} | ${mockedCart[0].colorName}`
    );
    const expectedPrice = screen.getByText(mockedCart[0].price + " eur");

    expect(expectedFullName).toBeInTheDocument();
    expect(expectedName).toBeInTheDocument();
    expect(expectedStorageAndColor).toBeInTheDocument();
    expect(expectedPrice).toBeInTheDocument();
  });

  it("calls removeFromCart when the remove button is clicked", () => {
    const expectedDeleteButton = "eliminar";

    render(<ItemInCart phone={mockedCart[0]} />);

    fireEvent.click(screen.getByText(expectedDeleteButton));

    expect(removeFromCart).toHaveBeenCalledWith(mockedCart[0].cartId);
  });
});
