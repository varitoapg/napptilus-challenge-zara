import { renderHook, act } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { useSearchPhone } from "./useSearchPhone";

describe("useSearchPhone", () => {
  const newQuery = "new query";
  const delay = 500;

  vi.useFakeTimers();

  it("should initialize with default values", () => {
    const { result } = renderHook(() => useSearchPhone());

    expect(result.current.searchQuery).toBe("");
    expect(result.current.debouncedQuery).toBe("");
  });

  it("should initialize with provided initial value", () => {
    const initialValue = "initial";
    const { result } = renderHook(() => useSearchPhone(initialValue));

    expect(result.current.searchQuery).toBe(initialValue);
    expect(result.current.debouncedQuery).toBe(initialValue);
  });

  it("should update searchQuery immediately", () => {
    const { result } = renderHook(() => useSearchPhone());

    act(() => {
      result.current.setSearchQuery(newQuery);
    });

    expect(result.current.searchQuery).toBe(newQuery);
  });

  it("should update debouncedQuery after delay", () => {
    const { result } = renderHook(() => useSearchPhone("", delay));

    act(() => {
      result.current.setSearchQuery(newQuery);
    });

    act(() => {
      vi.advanceTimersByTime(delay);
    });

    expect(result.current.debouncedQuery).toBe(newQuery);
  });

  it("should not update debouncedQuery if delay has not passed", () => {
    const { result } = renderHook(() => useSearchPhone("", delay));

    act(() => {
      result.current.setSearchQuery(newQuery);
    });

    act(() => {
      vi.advanceTimersByTime(200);
    });

    expect(result.current.debouncedQuery).toBe("");
  });

  it("should handle rapid consecutive updates correctly", () => {
    const firstQuery = "query1";
    const secondQuery = "query2";

    const { result } = renderHook(() => useSearchPhone("", delay));

    act(() => {
      result.current.setSearchQuery(firstQuery);
    });

    act(() => {
      vi.advanceTimersByTime(200);
    });

    act(() => {
      result.current.setSearchQuery(secondQuery);
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
        initialProps: { delay },
      }
    );

    act(() => {
      result.current.setSearchQuery(newQuery);
    });

    rerender({ delay: 1000 });

    act(() => {
      vi.advanceTimersByTime(delay);
    });

    expect(result.current.debouncedQuery).toBe("");

    act(() => {
      vi.advanceTimersByTime(delay);
    });

    expect(result.current.debouncedQuery).toBe(newQuery);
  });

  it("should update searchQuery immediately", () => {
    const { result } = renderHook(() => useSearchPhone());

    act(() => {
      result.current.setSearchQuery(newQuery);
    });

    expect(result.current.searchQuery).toBe(newQuery);

    act(() => {
      result.current.handlerClear();
    });

    expect(result.current.searchQuery).toBe("");
  });
});
