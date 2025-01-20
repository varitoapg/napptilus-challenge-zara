import { useState, useEffect } from "react";

export const usePhoneSelector = (initialPhone, colorOptions) => {
  const [selectedColor, setSelectedColor] = useState({
    imageUrl: initialPhone.imageUrl,
    name: initialPhone.name,
    hexCode: initialPhone.hexCode,
  });

  const [selectedStorage, setSelectedStorage] = useState(null);

  useEffect(() => {
    setSelectedColor({
      imageUrl: initialPhone.imageUrl,
      name: initialPhone.name,
      hexCode: initialPhone.hexCode,
    });
    setSelectedStorage(null);
  }, [initialPhone]);

  const handleColorChange = (hexCode) => {
    const selectedOption = colorOptions.find(
      (option) => option.hexCode === hexCode
    );

    setSelectedColor(selectedOption);
  };

  const handleStorageChange = (storage) => {
    setSelectedStorage({ capacity: storage.capacity, price: storage.price });
  };

  return {
    selectedColor,
    selectedStorage,
    handleColorChange,
    handleStorageChange,
  };
};
