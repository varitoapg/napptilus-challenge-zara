import { createContext, useCallback, useContext, useState } from "react";
import PropTypes from "prop-types";
import {
  getCartFromLocalStorage,
  saveCartToLocalStorage,
  removePhoneFromLocalStorage,
} from "../../services/cartServices/cartServices";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(getCartFromLocalStorage());

  const addPhoneToCart = useCallback(
    (phone) => {
      const updatedCart = [...cart, phone];
      setCart(updatedCart);
      saveCartToLocalStorage(updatedCart);
    },
    [cart]
  );

  const removePhoneFromCart = useCallback(
    (cartIdToRemove) => {
      const updatedCart = cart.filter(
        (phone) => phone.cartId !== cartIdToRemove
      );
      setCart(updatedCart);
      removePhoneFromLocalStorage(cartIdToRemove);
    },
    [cart]
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addPhoneToCart,
        removePhoneFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useCartContext = () => {
  return useContext(CartContext);
};
