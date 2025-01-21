import { useState, useEffect } from "react";
import { useCartActions } from "../useCartActions/useCartActions";

export const usePhoneSelector = (initialPhone, colorOptions) => {
  const { saveToCart } = useCartActions();
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

  const handleSubmitPhone = () => {
    const newPhone = {
      name: initialPhone.name,
      colorName: selectedColor.name,
      imageUrl: selectedColor.imageUrl,
      capacity: selectedStorage.capacity,
      price: selectedStorage.price,
    };

    saveToCart(newPhone);
  };

  return {
    selectedColor,
    selectedStorage,
    handleColorChange,
    handleStorageChange,
    handleSubmitPhone,
  };
};
