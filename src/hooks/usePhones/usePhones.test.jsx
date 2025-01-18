import { render, screen, waitFor } from "@testing-library/react";
import { vi, describe, it, expect, beforeEach } from "vitest";

import { MockedUseOfUsePhones } from "../../mocks/phones/MockedUseOfUsePhones";
import {
  usePhoneContext,
  PhoneProvider,
} from "../../contexts/PhoneContext/PhoneContext";
import { mockPhones } from "../../mocks/phones/phones";

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
      phones: [],
      loading: true,
      error: null,
      loadPhones: vi.fn(),
    });

    render(
      <PhoneProvider>
        <MockedUseOfUsePhones search={""} />
      </PhoneProvider>
    );

    expect(screen.queryByText("Loading...")).not.toBeNull();
  });

  it("displays phones when loaded successfully also the total phones", async () => {
    usePhoneContext.mockReturnValue({
      phones: mockPhones,
      loading: false,
      error: null,
      loadPhones: vi.fn(),
    });

    render(
      <PhoneProvider>
        <MockedUseOfUsePhones search={""} />
      </PhoneProvider>
    );

    await waitFor(() => {
      expect(screen.queryByText("Phone 1")).not.toBeNull();
      expect(screen.queryByText("Phone 2")).not.toBeNull();
      expect(screen.queryByText("Total Phones: 2")).not.toBeNull();
    });
  });

  it("displays error when loading fails", async () => {
    usePhoneContext.mockReturnValue({
      phones: [],
      loading: false,
      error: "Failed to load phones.",
      loadPhones: vi.fn(),
    });

    render(
      <PhoneProvider>
        <MockedUseOfUsePhones search={""} />
      </PhoneProvider>
    );

    await waitFor(() => {
      expect(screen.queryByText("Failed to load phones.")).not.toBeNull();
    });
  });
});
