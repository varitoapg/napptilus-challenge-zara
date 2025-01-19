import { useLocation } from "react-router-dom";

export const useCartInformation = () => {
  const location = useLocation();
  const isCartVisible = !location.pathname.split("/").includes("cart");

  // TODO: Change when cart context is implemented
  const havePurchases = false;
  const phonesInCart = 0;
  return { havePurchases, phonesInCart, isCartVisible };
};
