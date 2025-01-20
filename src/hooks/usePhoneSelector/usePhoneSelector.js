import { useState } from "react";

export const usePhoneSelector = (initialPhone, colorOptions) => {
  const [selectedColor, setSelectedColor] = useState({
    imageUrl: initialPhone.imageUrl,
    name: initialPhone.name,
  });

  const [selectedStorage, setSelectedStorage] = useState(null);

  const handleColorChange = (hexCode) => {
    const selectedOption = colorOptions.find(
      (option) => option.hexCode === hexCode
    );
    setSelectedColor({
      imageUrl: selectedOption.imageUrl,
      name: selectedOption.name,
    });
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
