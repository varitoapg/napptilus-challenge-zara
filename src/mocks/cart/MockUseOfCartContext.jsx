import { useCartContext } from "../../contexts/CartContext/CartContext";
import PropTypes from "prop-types";

const MockUseOfCartContext = ({ phone }) => {
  const { cart, removePhoneFromCart, addPhoneToCart } = useCartContext();
  return (
    <div>
      <button onClick={() => addPhoneToCart(phone)}>Add Phone</button>

      <button onClick={() => removePhoneFromCart(phone.cartId)}>
        Remove Phone
      </button>
      <div>{cart.length}</div>
    </div>
  );
};

MockUseOfCartContext.propTypes = {
  phone: PropTypes.shape({
    cartId: PropTypes.string.isRequired,
  }),
};

export default MockUseOfCartContext;
