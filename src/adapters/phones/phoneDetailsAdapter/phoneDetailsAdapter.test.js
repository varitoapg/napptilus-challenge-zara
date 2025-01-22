import { vi, describe, it, expect } from "vitest";
import phoneDetailsAdapter from "./phoneDetailsAdapter";
import { removeDuplicatesById } from "../../../utils/arrays/arrays";

vi.mock("../../../utils/arrays/arrays", () => ({
  removeDuplicatesById: vi.fn(),
}));

describe("phoneDetailsAdapter", () => {
  it("should adapt phone details correctly", () => {
    const phone = {
      basePrice: 999,
      brand: "TestBrand",
      colorOptions: ["Black", "White"],
      description: "Test description",
      id: "123",
      name: "TestPhone",
      rating: 4.5,
      similarProducts: [
        { id: "1", name: "SimilarPhone1" },
        { id: "2", name: "SimilarPhone2" },
        { id: "1", name: "SimilarPhone1" },
      ],
      specs: { ram: "8GB", storage: "128GB" },
      storageOptions: ["128GB", "256GB"],
    };

    const uniqueSimilarPhones = [
      { id: "1", name: "SimilarPhone1" },
      { id: "2", name: "SimilarPhone2" },
    ];

    removeDuplicatesById.mockReturnValue(uniqueSimilarPhones);

    const adaptedPhone = phoneDetailsAdapter(phone);

    expect(adaptedPhone).toEqual({
      basePrice: 999,
      brand: "TestBrand",
      colorOptions: ["Black", "White"],
      description: "Test description",
      id: "123",
      name: "TestPhone",
      rating: 4.5,
      similarProducts: uniqueSimilarPhones,
      specs: { ram: "8GB", storage: "128GB" },
      storageOptions: ["128GB", "256GB"],
    });

    expect(removeDuplicatesById).toHaveBeenCalledWith(phone.similarProducts);
  });
});
