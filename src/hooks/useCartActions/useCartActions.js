import { useCallback } from "react";
import { useCartContext } from "../../contexts/CartContext/CartContext";

export const useCartActions = () => {
  const { addPhoneToCart, removePhoneFromCart } = useCartContext();

  const saveToCart = useCallback(
    (phone) => {
      addPhoneToCart(phone);
    },
    [addPhoneToCart]
  );

  const removeFromCart = useCallback(
    (phoneId) => {
      removePhoneFromCart(phoneId);
    },
    [removePhoneFromCart]
  );

  return { saveToCart, removeFromCart };
};
