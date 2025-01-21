import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useCartContext } from "../../contexts/CartContext/CartContext";

export const useCartActions = () => {
  const navigate = useNavigate();

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

  const handleContinueShopping = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return { saveToCart, removeFromCart, handleContinueShopping };
};
