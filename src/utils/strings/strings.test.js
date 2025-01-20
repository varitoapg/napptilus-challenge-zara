import { describe, it, expect } from "vitest";
import { addSpaceBeforeUppercase } from "./strings";

describe("addSpaceBeforeUppercase", () => {
  it("should add a space before uppercase letters", () => {
    expect(addSpaceBeforeUppercase("helloWorld")).toBe("hello World");
    expect(addSpaceBeforeUppercase("thisIsATest")).toBe("this Is A Test");
    expect(addSpaceBeforeUppercase("addSpaceBeforeUppercase")).toBe(
      "add Space Before Uppercase"
    );
  });

  it("should return the same string if there are no uppercase letters", () => {
    expect(addSpaceBeforeUppercase("helloworld")).toBe("helloworld");
    expect(addSpaceBeforeUppercase("test")).toBe("test");
  });

  it("should handle empty strings", () => {
    expect(addSpaceBeforeUppercase("")).toBe("");
  });

  it("should handle strings with only uppercase letters", () => {
    expect(addSpaceBeforeUppercase("HELLOWORLD")).toBe("HELLOWORLD");
  });

  it("should handle strings with spaces already present", () => {
    expect(addSpaceBeforeUppercase("hello World")).toBe("hello World");
    expect(addSpaceBeforeUppercase("this Is A Test")).toBe("this Is A Test");
  });
});
