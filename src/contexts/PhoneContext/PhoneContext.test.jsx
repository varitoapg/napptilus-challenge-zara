import { render, waitFor, screen } from "@testing-library/react";
import { vi, describe, it, expect, beforeEach } from "vitest";
import { PhoneProvider } from "./PhoneContext";
import { fetchPhones } from "../../services/phonesServices/phonesServices";
import { MockedUseOfPhoneContext } from "../../mocks/phones/MockedUseOfPhoneContext";
import { mockPhones } from "../../mocks/phones/phones";

vi.mock("../../services/phonesServices/phonesServices", () => ({
  fetchPhones: vi.fn(),
}));

describe("PhoneContext", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("shows Loading... first, then shows Phone 1 and Phone 2", async () => {
    fetchPhones.mockResolvedValueOnce(mockPhones);

    render(
      <PhoneProvider>
        <MockedUseOfPhoneContext />
      </PhoneProvider>
    );

    const loadingText = screen.getByText("Loading...");
    expect(loadingText).toBeDefined();

    await waitFor(() => {
      const notLoading = screen.queryByText("Loading...");

      expect(notLoading).toBeNull();

      const firstPhone = screen.queryByText("Phone 1");
      const secondPhone = screen.queryByText("Phone 2");

      expect(firstPhone).not.toBeNull();
      expect(secondPhone).not.toBeNull();
    });
  });

  it("handles error when loading phones fails", async () => {
    fetchPhones.mockRejectedValueOnce(new Error("Failed to load phones."));

    render(
      <PhoneProvider>
        <MockedUseOfPhoneContext />
      </PhoneProvider>
    );

    const loadingText = screen.queryByText("Loading...");
    expect(loadingText).toBeDefined();

    await waitFor(() => {
      const notLoading = screen.queryByText("Loading...");

      expect(notLoading).toBeNull();

      const expectedError = screen.getByText(
        "Failed to load phones: Failed to load phones."
      );

      expect(expectedError).not.toBeNull();
    });
  });
});
