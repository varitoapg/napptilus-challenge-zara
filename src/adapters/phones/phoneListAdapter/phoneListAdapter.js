const phoneListAdapter = (phoneList) => {
  return phoneList.map((phone) => {
    return {
      id: phone.id,
      name: phone.name,
      brand: phone.brand,
      basePrice: phone.basePrice,
      imageUrl: phone.imageUrl,
    };
  });
};

export default phoneListAdapter;
