import { render, waitFor, screen } from "@testing-library/react";
import { vi, describe, it, expect, beforeEach } from "vitest";
import { PhoneProvider } from "./PhoneContext";
import { fetchPhones } from "../../services/phonesServices/phonesServices";
import { fetchPhoneDetail } from "../../services/phoneDetailServices/phoneDetailServices";
import { MockedUseOfPhoneContext } from "../../mocks/components/MockedUseOfPhoneContext";
import { MockUseOfDetailPhoneContex } from "../../mocks/components/MockUseOfDetailPhoneContex";

import { mockedPhoneList, mockPhoneDetail } from "../../mocks/phones/phones";

vi.mock("../../services/phonesServices/phonesServices", () => ({
  fetchPhones: vi.fn(),
}));

vi.mock("../../services/phoneDetailServices/phoneDetailServices", () => ({
  fetchPhoneDetail: vi.fn(),
}));

describe("PhoneContext", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  const loadingText = "Loading...";

  it("shows Loading... first, then shows Phone 1 and Phone 2", async () => {
    fetchPhones.mockResolvedValueOnce(mockedPhoneList);

    render(
      <PhoneProvider>
        <MockedUseOfPhoneContext />
      </PhoneProvider>
    );

    const loader = screen.getByText(loadingText);

    expect(loader).toBeDefined();

    await waitFor(() => {
      const notLoading = screen.queryByText(loadingText);

      expect(notLoading).toBeNull();

      const firstPhone = screen.queryByText(mockedPhoneList[0].name);
      const secondPhone = screen.queryByText(mockedPhoneList[1].name);

      expect(firstPhone).not.toBeNull();
      expect(secondPhone).not.toBeNull();
    });
  });

  it("handles error when loading phones fails", async () => {
    const errorText = "Failed to load phones.";
    fetchPhones.mockRejectedValueOnce(new Error(errorText));

    render(
      <PhoneProvider>
        <MockedUseOfPhoneContext />
      </PhoneProvider>
    );

    const loader = screen.queryByText(loadingText);
    expect(loader).toBeDefined();

    await waitFor(() => {
      const notLoading = screen.queryByText(loadingText);

      expect(notLoading).toBeNull();

      const expectedError = screen.getByText(
        `Failed to load phones: ${errorText}`
      );

      expect(expectedError).not.toBeNull();
    });
  });

  it("shows Loading... first, then shows the name and brand of the phone", async () => {
    fetchPhoneDetail.mockResolvedValueOnce(mockPhoneDetail);

    render(
      <PhoneProvider>
        <MockUseOfDetailPhoneContex />
      </PhoneProvider>
    );

    const loader = screen.getByText(loadingText);
    expect(loader).toBeDefined();

    await waitFor(() => {
      const notLoading = screen.queryByText(loadingText);

      expect(notLoading).toBeNull();

      const phoneName = screen.queryByText(mockPhoneDetail.name);
      const phoneBrand = screen.queryByText(mockPhoneDetail.brand);

      expect(phoneName).not.toBeNull();
      expect(phoneBrand).not.toBeNull();
    });
  });

  it("handles error when loading phone details fails", async () => {
    const errorMessage = "Failed to load phones.";
    fetchPhoneDetail.mockRejectedValueOnce(new Error(errorMessage));

    render(
      <PhoneProvider>
        <MockUseOfDetailPhoneContex />
      </PhoneProvider>
    );

    const loader = screen.queryByText(loadingText);
    expect(loader).toBeDefined();

    await waitFor(() => {
      const notLoading = screen.queryByText(loadingText);

      expect(notLoading).toBeNull();

      const expectedError = screen.getByText(
        `Failed to load phone details: ${"Failed to load phones."}`
      );

      expect(expectedError).not.toBeNull();
    });
  });
});
