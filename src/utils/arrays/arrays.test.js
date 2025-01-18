import { describe, it, expect } from "vitest";
import { removeDuplicatesById } from "./arrays";

describe("removeDuplicatesById", () => {
  it("should remove duplicate objects by id", () => {
    const input = [
      { id: 1, name: "Alice" },
      { id: 2, name: "Bob" },
      { id: 1, name: "Alice" },
      { id: 3, name: "Charlie" },
      { id: 2, name: "Bob" },
    ];
    const expectedOutput = [
      { id: 1, name: "Alice" },
      { id: 2, name: "Bob" },
      { id: 3, name: "Charlie" },
    ];
    expect(removeDuplicatesById(input)).toEqual(expectedOutput);
  });

  it("should return an empty array when input is an empty array", () => {
    const input = [];
    const expectedOutput = [];
    expect(removeDuplicatesById(input)).toEqual(expectedOutput);
  });

  it("should return the same array when there are no duplicates", () => {
    const input = [
      { id: 1, name: "Alice" },
      { id: 2, name: "Bob" },
      { id: 3, name: "Charlie" },
    ];
    const expectedOutput = [
      { id: 1, name: "Alice" },
      { id: 2, name: "Bob" },
      { id: 3, name: "Charlie" },
    ];
    expect(removeDuplicatesById(input)).toEqual(expectedOutput);
  });

  it("should handle an array with one object", () => {
    const input = [{ id: 1, name: "Alice" }];
    const expectedOutput = [{ id: 1, name: "Alice" }];
    expect(removeDuplicatesById(input)).toEqual(expectedOutput);
  });
});
