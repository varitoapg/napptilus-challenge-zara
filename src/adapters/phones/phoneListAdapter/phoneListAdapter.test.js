import { describe, it, expect } from "vitest";
import phoneListAdapter from "./phoneListAdapter";
import {
  mockedPhoneListWIthExtraFields,
  mockedPhoneList,
} from "../../../mocks/phones/phones";
import { beforeEach } from "node:test";
import { cleanup } from "@testing-library/react";

describe("phoneListAdapter", () => {
  beforeEach(cleanup);

  it("should adapt phone list correctly", () => {
    const adaptedList = phoneListAdapter(mockedPhoneListWIthExtraFields);

    expect(adaptedList).toEqual(mockedPhoneList);
  });

  it("should return an empty array when input is an empty array", () => {
    const phoneList = [];
    const adaptedList = phoneListAdapter(phoneList);
    expect(adaptedList).toEqual([]);
  });

  it("should handle missing fields gracefully", () => {
    const phoneList = [
      {
        name: mockedPhoneList[0].name,
        brand: mockedPhoneList[0].brand,
        basePrice: mockedPhoneList[0].basePrice,
      },
    ];

    const adaptedList = phoneListAdapter(phoneList);

    expect(adaptedList).toEqual([
      {
        name: mockedPhoneList[0].name,
        brand: mockedPhoneList[0].brand,
        basePrice: mockedPhoneList[0].basePrice,
        id: undefined,
        imageUrl: undefined,
      },
    ]);
  });
});
