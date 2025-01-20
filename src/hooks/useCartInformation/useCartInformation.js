import { useLocation } from "react-router-dom";
import { useCartContext } from "../../contexts/CartContext/CartContext";

export const useCartInformation = () => {
  const location = useLocation();
  const isCartVisible = !location.pathname.split("/").includes("cart");

  const { cart } = useCartContext();

  const phonesInCart = cart.length;
  const totalPrice = cart.reduce((acc, phone) => acc + phone.price, 0);

  return { totalPrice, phonesInCart, isCartVisible, cart };
};
