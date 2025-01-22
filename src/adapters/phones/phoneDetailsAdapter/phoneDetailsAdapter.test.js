import { vi, describe, it, expect } from "vitest";
import phoneDetailsAdapter from "./phoneDetailsAdapter";
import { removeDuplicatesById } from "../../../utils/arrays/arrays";
import {
  mockedPhoneToAdapt,
  mockedSimilarPhones,
} from "../../../mocks/phones/phones";

vi.mock("../../../utils/arrays/arrays", () => ({
  removeDuplicatesById: vi.fn(),
}));

describe("phoneDetailsAdapter", () => {
  it("should adapt phone details correctly", () => {
    removeDuplicatesById.mockReturnValue(mockedSimilarPhones);

    const adaptedPhone = phoneDetailsAdapter(mockedPhoneToAdapt);

    expect(adaptedPhone).toEqual({
      basePrice: 999,
      brand: "TestBrand",
      colorOptions: ["Black", "White"],
      description: "Test description",
      id: "123",
      name: "TestPhone",
      rating: 4.5,
      similarProducts: mockedSimilarPhones,
      specs: { ram: "8GB", storage: "128GB" },
      storageOptions: ["128GB", "256GB"],
    });

    expect(removeDuplicatesById).toHaveBeenCalledWith(
      mockedPhoneToAdapt.similarProducts
    );
  });
});
