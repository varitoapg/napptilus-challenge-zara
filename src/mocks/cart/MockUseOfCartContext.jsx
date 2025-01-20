import { useCartContext } from "../../contexts/CartContext/CartContext";
import PropTypes from "prop-types";

const MockUseOfCartContext = ({ phone }) => {
  const { cart, removePhoneFromCart, addPhoneToCart } = useCartContext();
  return (
    <div>
      <button onClick={() => addPhoneToCart(phone)}>Add Phone</button>

      <button onClick={() => removePhoneFromCart(phone.id)}>
        Remove Phone
      </button>
      <div>{cart.length}</div>
    </div>
  );
};

MockUseOfCartContext.propTypes = {
  phone: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }),
};

export default MockUseOfCartContext;
