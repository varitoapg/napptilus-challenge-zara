import { useState } from "react";

export const usePhoneSelector = (initialPhone, colorOptions) => {
  const [selectedColor, setSelectedColor] = useState({
    imageUrl: initialPhone.imageUrl,
    name: initialPhone.name,
    hexCode: initialPhone.hexCode,
  });

  const [selectedStorage, setSelectedStorage] = useState(null);

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
