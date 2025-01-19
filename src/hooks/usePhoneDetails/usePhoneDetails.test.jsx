import { render, screen, waitFor } from "@testing-library/react";
import { vi, describe, it, expect, beforeEach } from "vitest";
import { MockedUseOfusePhoneDetails } from "../../mocks/phones/MockedUseOfusePhoneDetails";
import {
  usePhoneContext,
  PhoneProvider,
} from "../../contexts/PhoneContext/PhoneContext";
import { mockPhoneDetail } from "../../mocks/phones/phones";

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
    usePhoneContext.mockReturnValue({
      phoneDetails: null,
      loading: true,
      error: null,
      loadPhoneDetails: vi.fn(),
    });

    render(
      <PhoneProvider>
        <MockedUseOfusePhoneDetails />
      </PhoneProvider>
    );

    expect(screen.queryByText("Loading...")).not.toBeNull();
  });

  it("displays phones when loaded successfully also the total phones", async () => {
    usePhoneContext.mockReturnValue({
      phoneDetails: mockPhoneDetail,
      loading: false,
      error: null,
      loadPhoneDetails: vi.fn(),
    });

    render(
      <PhoneProvider>
        <MockedUseOfusePhoneDetails />
      </PhoneProvider>
    );

    await waitFor(() => {
      expect(screen.queryByText(mockPhoneDetail.name)).not.toBeNull();
      expect(screen.queryByText(mockPhoneDetail.brand)).not.toBeNull();
    });
  });

  it("displays error when loading fails", async () => {
    usePhoneContext.mockReturnValue({
      phoneDetails: null,
      loading: false,
      error: "Failed to load phone details.",
      loadPhoneDetails: vi.fn(),
    });

    render(
      <PhoneProvider>
        <MockedUseOfusePhoneDetails />
      </PhoneProvider>
    );

    await waitFor(() => {
      expect(
        screen.queryByText("Failed to load phone details.")
      ).not.toBeNull();
    });
  });
});
