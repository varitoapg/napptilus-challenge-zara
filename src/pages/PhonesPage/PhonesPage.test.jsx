import {
  render,
  screen,
  fireEvent,
  waitFor,
  cleanup,
} from "@testing-library/react";
import { vi, describe, beforeEach, expect, it, afterEach } from "vitest";
import PhonesPage from "./PhonesPage";
import { PhoneProvider } from "../../contexts/PhoneContext/PhoneContext";
import { usePhones } from "../../hooks/usePhones/usePhones";
import { useSearchPhone } from "../../hooks/useSearchPhone/useSearchPhone";

vi.mock("../../hooks/usePhones/usePhones");
vi.mock("../../hooks/useSearchPhone/useSearchPhone");

describe("PhonesPage", () => {
  beforeEach(() => {
    useSearchPhone.mockReturnValue({
      searchQuery: "",
      setSearchQuery: vi.fn(),
      debouncedQuery: "",
    });

    usePhones.mockReturnValue({
      phones: [
        { id: 1, name: "Phone 1" },
        { id: 2, name: "Phone 2" },
      ],
      totalPhones: 2,
    });
  });

  afterEach(cleanup);

  it("should render search input and phone list", async () => {
    render(
      <PhoneProvider>
        <PhonesPage />
      </PhoneProvider>
    );

    expect(
      screen.getByPlaceholderText("Search for a smartphone...")
    ).not.toBeNull();
    expect(screen.getByText("2 results")).not.toBeNull();

    expect(screen.getByText("Phone 1")).not.toBeNull();
    expect(screen.getByText("Phone 2")).not.toBeNull();
  });

  it("should update search query and results count on input change", async () => {
    usePhones.mockReturnValueOnce({
      phones: [{ id: 1, name: "Phone 1" }],
      totalPhones: 1,
    });

    const mockSetSearchQuery = vi.fn();
    useSearchPhone.mockReturnValueOnce({
      searchQuery: "Phone 1",
      setSearchQuery: mockSetSearchQuery,
      debouncedQuery: "Phone 1",
    });

    render(
      <PhoneProvider>
        <PhonesPage />
      </PhoneProvider>
    );

    const input = screen.getByPlaceholderText("Search for a smartphone...");

    fireEvent.change(input, { target: { value: "Phone 1" } });

    await waitFor(() => {
      expect(screen.queryByText("Phone 1")).not.toBeNull();

      expect(screen.getByText(/1 results/)).not.toBeNull();
    });
  });
});
