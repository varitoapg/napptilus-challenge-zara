import { render, cleanup, screen } from "@testing-library/react";
import { describe, it, expect, afterEach } from "vitest";
import { BrowserRouter } from "react-router-dom";
import PhoneCardList from "./PhoneCardList";
import { mockedPhoneList } from "../../mocks/phones/phones";

describe("PhoneCardList", () => {
  afterEach(cleanup);

  const phones = mockedPhoneList;
  const phoneCardTestId = "phone-card";
  const phoneCardListTestId = "phone-card-list";

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

    const phoneCards = screen.queryAllByTestId(phoneCardTestId);

    expect(phoneCards.length).toBe(phones.length);
  });

  it("passes the correct props to each PhoneCard component", () => {
    render(
      <BrowserRouter>
        <PhoneCardList phones={phones} />
      </BrowserRouter>
    );

    const phoneCards = screen.queryAllByTestId(phoneCardTestId);

    Array.from(phoneCards).forEach((phoneCard, index) => {
      expect(phoneCard).not.toBeNull(phones[index].name);
      expect(phoneCard).not.toBeNull(phones[index].brand);
      expect(phoneCard).not.toBeNull(`${phones[index].basePrice} EUR`);
    });
  });

  it("renders PhoneCard components in a horizontal layout", () => {
    render(
      <BrowserRouter>
        <PhoneCardList phones={phones} isHorizontal />
      </BrowserRouter>
    );

    const phoneCards = screen.queryByTestId(phoneCardListTestId);

    expect(phoneCards).toHaveClass("phone-grid-horizontal");
  });

  it("renders PhoneCard with `title` in it", () => {
    const title = "title";

    render(
      <BrowserRouter>
        <PhoneCardList phones={phones} isHorizontal title={title} />
      </BrowserRouter>
    );

    const expectedTitle = screen.queryByRole("heading", {
      name: /title/i,
      level: 2,
    });

    expect(expectedTitle).toBeInTheDocument();
  });
});
