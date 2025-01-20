import { cleanup, render, screen } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest";
import PhoneSpecifications from "./PhoneSpecifications";
import { addSpaceBeforeUppercase } from "../../utils/strings/strings";

describe("PhoneSpecifications", () => {
  beforeEach(cleanup);

  const mockSpecifications = {
    screenSize: "6.1 inches",
    battery: "3110 mAh",
    camera: "12 MP",
  };

  it("renders without crashing", () => {
    render(<PhoneSpecifications phoneSpecifications={mockSpecifications} />);
  });

  it("displays the correct number of specifications", () => {
    render(<PhoneSpecifications phoneSpecifications={mockSpecifications} />);

    const items = screen.getAllByRole("listitem");

    expect(items).toHaveLength(Object.keys(mockSpecifications).length);
  });

  it("displays the correct specification titles and descriptions", () => {
    render(<PhoneSpecifications phoneSpecifications={mockSpecifications} />);

    Object.entries(mockSpecifications).forEach(([key, value]) => {
      expect(
        screen.getByText(addSpaceBeforeUppercase(key))
      ).toBeInTheDocument();
      expect(screen.getByText(value)).toBeInTheDocument();
    });
  });
});
