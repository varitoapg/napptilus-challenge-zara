import { cleanup, render, screen } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest";
import { BrowserRouter } from "react-router-dom";
import PhoneCard from "./PhoneCard";
import { mockedPhoneList } from "../../mocks/phones/phones";

describe("PhoneCard", () => {
  beforeEach(cleanup);
  const phone = mockedPhoneList[0];

  it("renders the phone image", () => {
    render(
      <BrowserRouter>
        <PhoneCard phone={phone} />
      </BrowserRouter>
    );

    const imgElement = screen.getByAltText(phone.name);

    expect(imgElement).not.toBeNull();
    expect(imgElement).toHaveProperty("src", phone.imageUrl);
  });

  it("renders the phone brand", () => {
    render(
      <BrowserRouter>
        <PhoneCard phone={phone} />
      </BrowserRouter>
    );

    const brandElement = screen.getByText(phone.brand);

    expect(brandElement).not.toBeNull();
  });

  it("renders the phone name", () => {
    render(
      <BrowserRouter>
        <PhoneCard phone={phone} />
      </BrowserRouter>
    );

    const nameElement = screen.getByText(phone.name);

    expect(nameElement).not.toBeNull();
  });

  it("renders the phone price", () => {
    render(
      <BrowserRouter>
        <PhoneCard phone={phone} />
      </BrowserRouter>
    );

    const priceElement = screen.getByText(`${phone.basePrice} EUR`);

    expect(priceElement).not.toBeNull();
  });

  it("renders the phone card with phone-card--horizontal class", () => {
    const phonTestId = "phone-card";
    render(
      <BrowserRouter>
        <PhoneCard phone={phone} layout="horizontal" />
      </BrowserRouter>
    );

    const articleElement = screen.getByTestId(phonTestId);

    expect(articleElement).toHaveClass("phone-card--horizontal");
  });
});
