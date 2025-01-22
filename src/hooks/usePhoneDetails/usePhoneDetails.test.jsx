import { render, screen, waitFor } from "@testing-library/react";
import { vi, describe, it, expect, beforeEach } from "vitest";
import { MockedUseOfusePhoneDetails } from "../../mocks/phones/MockedUseOfusePhoneDetails";
import {
  usePhoneContext,
  PhoneProvider,
} from "../../contexts/PhoneContext/PhoneContext";
import { mockPhoneDetail } from "../../mocks/phones/phones";
import {
  mockUsePhoneDetailsLoading,
  mockUsePhoneDetailsWithPhone,
  mockUsePhoneDetailsWithError,
} from "../../mocks/hooks/hooks";

vi.mock("../../contexts/PhoneContext/PhoneContext", () => ({
  usePhoneContext: vi.fn(),
  // eslint-disable-next-line react/prop-types
  PhoneProvider: ({ children }) => <div>{children}</div>,
}));

describe("usePhones Hook", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("displays loading initially", () => {
    const loadingText = "Loading...";
    usePhoneContext.mockReturnValue(mockUsePhoneDetailsLoading);

    render(
      <PhoneProvider>
        <MockedUseOfusePhoneDetails />
      </PhoneProvider>
    );

    const loader = screen.queryByText(loadingText);

    expect(loader).not.toBeNull();
  });

  it("displays phones when loaded successfully also the total phones", async () => {
    usePhoneContext.mockReturnValue(mockUsePhoneDetailsWithPhone);

    render(
      <PhoneProvider>
        <MockedUseOfusePhoneDetails />
      </PhoneProvider>
    );

    await waitFor(() => {
      const phoneDetailName = screen.queryByText(mockPhoneDetail.name);
      const phoneDetailBrand = screen.queryByText(mockPhoneDetail.brand);

      expect(phoneDetailName).not.toBeNull();
      expect(phoneDetailBrand).not.toBeNull();
    });
  });

  it("displays error when loading fails", async () => {
    const errorMessage = "Failed to load phone details.";
    usePhoneContext.mockReturnValue(mockUsePhoneDetailsWithError);

    render(
      <PhoneProvider>
        <MockedUseOfusePhoneDetails />
      </PhoneProvider>
    );

    await waitFor(() => {
      const error = screen.queryByText(errorMessage);
      expect(error).not.toBeNull();
    });
  });
});
