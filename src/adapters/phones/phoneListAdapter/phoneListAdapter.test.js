import { describe, it, expect } from "vitest";
import phoneListAdapter from "./phoneListAdapter";

describe("phoneListAdapter", () => {
  it("should adapt phone list correctly", () => {
    const phoneList = [
      {
        id: 1,
        name: "Phone 1",
        brand: "Brand A",
        basePrice: 100,
        imageUrl: "http://example.com/phone1.jpg",
        extraField: "extraValue1",
      },
      {
        id: 2,
        name: "Phone 2",
        brand: "Brand B",
        basePrice: 200,
        imageUrl: "http://example.com/phone2.jpg",
        extraField: "extraValue2",
      },
    ];

    const adaptedList = phoneListAdapter(phoneList);

    expect(adaptedList).toEqual([
      {
        id: 1,
        name: "Phone 1",
        brand: "Brand A",
        basePrice: 100,
        imageUrl: "http://example.com/phone1.jpg",
      },
      {
        id: 2,
        name: "Phone 2",
        brand: "Brand B",
        basePrice: 200,
        imageUrl: "http://example.com/phone2.jpg",
      },
    ]);
  });

  it("should return an empty array when input is an empty array", () => {
    const phoneList = [];
    const adaptedList = phoneListAdapter(phoneList);
    expect(adaptedList).toEqual([]);
  });

  it("should handle missing fields gracefully", () => {
    const phoneList = [
      {
        id: 1,
        name: "Phone 1",
        brand: "Brand A",
      },
    ];

    const adaptedList = phoneListAdapter(phoneList);

    expect(adaptedList).toEqual([
      {
        id: 1,
        name: "Phone 1",
        brand: "Brand A",
        basePrice: undefined,
        imageUrl: undefined,
      },
    ]);
  });
});
