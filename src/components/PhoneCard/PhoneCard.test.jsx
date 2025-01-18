import { cleanup, render, screen } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest";
import PhoneCard from "./PhoneCard";
import { mockPhoneOfList } from "../../mocks/phones/phones";

describe("PhoneCard", () => {
  beforeEach(cleanup);
  const phone = mockPhoneOfList;

  it("renders the phone image", () => {
    render(<PhoneCard phone={phone} />);
    const imgElement = screen.getByAltText(phone.name);
    expect(imgElement).not.toBeNull();
    expect(imgElement).toHaveProperty("src", phone.imageUrl);
  });

  it("renders the phone brand", () => {
    render(<PhoneCard phone={phone} />);
    const brandElement = screen.getByText(phone.brand);
    expect(brandElement).not.toBeNull();
  });

  it("renders the phone name", () => {
    render(<PhoneCard phone={phone} />);
    const nameElement = screen.getByText(phone.name);
    expect(nameElement).not.toBeNull();
  });

  it("renders the phone price", () => {
    render(<PhoneCard phone={phone} />);
    const priceElement = screen.getByText(`${phone.basePrice} EUR`);
    expect(priceElement).not.toBeNull();
  });
});
