import { renderHook, act } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { useSearchPhone } from "./useSearchPhone";

describe("useSearchPhone", () => {
  vi.useFakeTimers();

  it("should initialize with default values", () => {
    const { result } = renderHook(() => useSearchPhone());

    expect(result.current.searchQuery).toBe("");
    expect(result.current.debouncedQuery).toBe("");
  });

  it("should initialize with provided initial value", () => {
    const { result } = renderHook(() => useSearchPhone("initial"));

    expect(result.current.searchQuery).toBe("initial");
    expect(result.current.debouncedQuery).toBe("initial");
  });

  it("should update searchQuery immediately", () => {
    const { result } = renderHook(() => useSearchPhone());

    act(() => {
      result.current.setSearchQuery("new query");
    });

    expect(result.current.searchQuery).toBe("new query");
  });

  it("should update debouncedQuery after delay", () => {
    const { result } = renderHook(() => useSearchPhone("", 500));

    act(() => {
      result.current.setSearchQuery("new query");
    });

    act(() => {
      vi.advanceTimersByTime(500);
    });

    expect(result.current.debouncedQuery).toBe("new query");
  });

  it("should not update debouncedQuery if delay has not passed", () => {
    const { result } = renderHook(() => useSearchPhone("", 500));

    act(() => {
      result.current.setSearchQuery("new query");
    });

    act(() => {
      vi.advanceTimersByTime(200);
    });

    expect(result.current.debouncedQuery).toBe("");
  });

  it("should handle rapid consecutive updates correctly", () => {
    const { result } = renderHook(() => useSearchPhone("", 500));

    act(() => {
      result.current.setSearchQuery("query1");
    });

    act(() => {
      vi.advanceTimersByTime(200);
    });

    act(() => {
      result.current.setSearchQuery("query2");
    });

    act(() => {
      vi.advanceTimersByTime(300);
    });

    act(() => {
      vi.runAllTimers();
    });

    expect(result.current.debouncedQuery).toBe("query2");
  });

  it("should handle changing delay correctly", () => {
    const { result, rerender } = renderHook(
      ({ delay }) => useSearchPhone("", delay),
      {
        initialProps: { delay: 500 },
      }
    );

    act(() => {
      result.current.setSearchQuery("new query");
    });

    rerender({ delay: 1000 });

    act(() => {
      vi.advanceTimersByTime(500);
    });

    expect(result.current.debouncedQuery).toBe("");

    act(() => {
      vi.advanceTimersByTime(500);
    });

    expect(result.current.debouncedQuery).toBe("new query");
  });
});
