import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCartActions } from "../useCartActions/useCartActions";
import { v4 as uuidv4 } from "uuid";

export const usePhoneSelector = (initialPhone, colorOptions, name) => {
  const { phoneId } = useParams();

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
    const uniqueCartId = uuidv4();

    const newPhone = {
      id: phoneId,
      name: name,
      colorName: selectedColor.name,
      imageUrl: selectedColor.imageUrl,
      capacity: selectedStorage.capacity,
      price: selectedStorage.price,
      cartId: uniqueCartId,
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
