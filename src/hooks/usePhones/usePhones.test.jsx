import { render, screen, waitFor } from "@testing-library/react";
import { vi, describe, it, expect, beforeEach } from "vitest";
import {
  usePhoneContext,
  PhoneProvider,
} from "../../contexts/PhoneContext/PhoneContext";
import { MockedUseOfUsePhones } from "../../mocks/components/MockedUseOfUsePhones";
import {
  mockUsePhoneContextLoading,
  mockUsePhoneContextWithPhones,
  mockUsePhoneContextWithError,
} from "../../mocks/contexts/usePhoneContext";
import { mockedPhoneList } from "../../mocks/phones/phones";

vi.mock("../../contexts/PhoneContext/PhoneContext", () => ({
  usePhoneContext: vi.fn(),
  // eslint-disable-next-line react/prop-types
  PhoneProvider: ({ children }) => <div>{children}</div>,
}));

describe("usePhones Hook", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  const loadingText = "Loading...";

  it("displays loading initially", () => {
    usePhoneContext.mockReturnValue(mockUsePhoneContextLoading);

    render(
      <PhoneProvider>
        <MockedUseOfUsePhones search={""} />
      </PhoneProvider>
    );

    const loader = screen.queryByText(loadingText);

    expect(loader).not.toBeNull();
  });

  it("displays phones when loaded successfully also the total phones", async () => {
    usePhoneContext.mockReturnValue(mockUsePhoneContextWithPhones);

    render(
      <PhoneProvider>
        <MockedUseOfUsePhones search={""} />
      </PhoneProvider>
    );

    await waitFor(() => {
      const firstPhone = screen.queryByText(mockedPhoneList[0].name);
      const secondPhone = screen.queryByText(mockedPhoneList[1].name);
      const totalPhones = screen.queryByText(
        `Total Phones: ${mockedPhoneList.length}`
      );

      expect(firstPhone).not.toBeNull();
      expect(secondPhone).not.toBeNull();
      expect(totalPhones).not.toBeNull();
    });
  });

  it("displays error when loading fails", async () => {
    const errorText = "Failed to load phones.";
    usePhoneContext.mockReturnValue(mockUsePhoneContextWithError);

    render(
      <PhoneProvider>
        <MockedUseOfUsePhones search={""} />
      </PhoneProvider>
    );

    await waitFor(() => {
      const error = screen.queryByText(errorText);
      expect(error).not.toBeNull();
    });
  });
});
