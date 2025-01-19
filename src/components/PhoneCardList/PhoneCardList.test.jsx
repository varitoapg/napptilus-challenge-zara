import { render, cleanup, screen } from "@testing-library/react";
import { describe, it, expect, afterEach } from "vitest";
import { BrowserRouter } from "react-router-dom";
import PhoneCardList from "./PhoneCardList";
import { mockListOfPhones } from "../../mocks/phones/phones";

describe("PhoneCardList", () => {
  afterEach(cleanup);

  const phones = mockListOfPhones;

  it("renders without crashing", () => {
    render(
      <BrowserRouter>
        <PhoneCardList phones={phones} />
      </BrowserRouter>
    );
  });

  it("renders the correct number of PhoneCard components", () => {
    render(
      <BrowserRouter>
        <PhoneCardList phones={phones} />
      </BrowserRouter>
    );
    const phoneCards = screen.queryAllByTestId("phone-card");

    expect(phoneCards.length).toBe(phones.length);
  });

  it("passes the correct props to each PhoneCard component", () => {
    render(
      <BrowserRouter>
        <PhoneCardList phones={phones} />
      </BrowserRouter>
    );
    const phoneCards = screen.queryAllByTestId("phone-card");

    Array.from(phoneCards).forEach((phoneCard, index) => {
      expect(phoneCard).not.toBeNull(phones[index].name);
      expect(phoneCard).not.toBeNull(phones[index].brand);
      expect(phoneCard).not.toBeNull(`${phones[index].basePrice} EUR`);
    });
  });
});
