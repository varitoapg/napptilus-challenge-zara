import { removeDuplicatesById } from "../../../utils/arrays/arrays";

const phoneDetailsAdapter = (phone) => {
  const uniqueSimilarPhones = removeDuplicatesById(phone.similarProducts);

  return {
    basePrice: phone.basePrice,
    brand: phone.brand,
    colorOptions: phone.colorOptions,
    description: phone.description,
    id: phone.id,
    name: phone.name,
    rating: phone.rating,
    similarProducts: uniqueSimilarPhones,
    specs: phone.specs,
    storageOptions: phone.storageOptions,
  };
};

export default phoneDetailsAdapter;
