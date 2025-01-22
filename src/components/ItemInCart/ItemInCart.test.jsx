import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import ItemInCart from "./ItemInCart";
import { useCartActions } from "../../hooks/useCartActions/useCartActions";

vi.mock("../../hooks/useCartActions/useCartActions");

describe("ItemInCart", () => {
  const phone = {
    id: "1",
    capacity: "128GB",
    colorName: "Black",
    name: "iPhone 12",
    imageUrl: "https://example.com/iphone12.jpg",
    price: 999,
    cartId: "1",
  };

  const removeFromCart = vi.fn();

  beforeEach(() => {
    useCartActions.mockReturnValue({ removeFromCart });
  });

  it("renders phone details correctly", () => {
    render(<ItemInCart phone={phone} />);

    expect(screen.getByAltText("iPhone 12 Black")).toBeInTheDocument();
    expect(screen.getByText("iPhone 12")).toBeInTheDocument();
    expect(screen.getByText("128GB | Black")).toBeInTheDocument();
    expect(screen.getByText("999 eur")).toBeInTheDocument();
  });

  it("calls removeFromCart when the remove button is clicked", () => {
    render(<ItemInCart phone={phone} />);

    fireEvent.click(screen.getByText("eliminar"));

    expect(removeFromCart).toHaveBeenCalledWith("1");
  });
});
