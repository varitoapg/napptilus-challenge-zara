export const mockPhones = [
  { name: "Phone 1", id: 1 },
  { name: "Phone 2", id: 2 },
];

export const mockPhoneOfList = {
  imageUrl: "https://example.com/phone.jpg",
  name: "Phone Model",
  brand: "Phone Brand",
  basePrice: 999,
};

export const mockListOfPhones = [
  {
    id: 1,
    name: "Phone 1",
    brand: "Brand A",
    basePrice: 699,
    imageUrl: "/images/phone1.jpg",
  },
  {
    id: 2,
    name: "Phone 2",
    brand: "Brand B",
    basePrice: 799,
    imageUrl: "/images/phone2.jpg",
  },
];

export const mockPhoneDetail = {
  id: "Test main id",
  brand: "Test brande",
  name: "Test name",
  description: "Test description",
  basePrice: 619,
  rating: 4.6,
  specs: {
    screen: "Test screen",
    resolution: "Test resolution",
    processor: "Test processor",
    mainCamera: "Test camera",
    selfieCamera: "Test MP",
    battery: "No especificada",
    os: "test",
    storage: "128 GB",
  },
  colorOptions: [
    {
      name: "Color",
      hexCode: "#1C1C1E",
      imageUrl: "ColorImageUrl",
    },
  ],
  storageOptions: [
    {
      capacity: "128 GB",
      price: 619,
    },
  ],
  similarProducts: [
    {
      id: "similarId",
      brand: "Sim",
      name: "Similar",
      basePrice: 159,
      imageUrl: "simularImageUrl",
    },
  ],
};
