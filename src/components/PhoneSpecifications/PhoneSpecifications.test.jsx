import { cleanup, render, screen } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest";
import PhoneSpecifications from "./PhoneSpecifications";
import { addSpaceBeforeUppercase } from "../../utils/strings/strings";
import { mockedSpecifications } from "../../mocks/specifications/specifications";

describe("PhoneSpecifications", () => {
  beforeEach(cleanup);

  it("renders without crashing", () => {
    render(<PhoneSpecifications phoneSpecifications={mockedSpecifications} />);
  });

  it("displays the correct number of specifications", () => {
    render(<PhoneSpecifications phoneSpecifications={mockedSpecifications} />);

    const items = screen.getAllByRole("listitem");

    expect(items).toHaveLength(Object.keys(mockedSpecifications).length);
  });

  it("displays the correct specification titles and descriptions", () => {
    render(<PhoneSpecifications phoneSpecifications={mockedSpecifications} />);

    Object.entries(mockedSpecifications).forEach(([key, value]) => {
      expect(
        screen.getByText(addSpaceBeforeUppercase(key))
      ).toBeInTheDocument();
      expect(screen.getByText(value)).toBeInTheDocument();
    });
  });
});
