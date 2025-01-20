export const getCartFromLocalStorage = () => {
  const storedCart = localStorage.getItem("cart");
  return storedCart ? JSON.parse(storedCart) : [];
};

export const saveCartToLocalStorage = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

export const removePhoneFromLocalStorage = (phoneId) => {
  const cart = getCartFromLocalStorage();

  const updatedCart = cart.filter((phone) => phone.id !== phoneId);

  saveCartToLocalStorage(updatedCart);
};
