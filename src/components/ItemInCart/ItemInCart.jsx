import PropTypes from "prop-types";
import { useCartActions } from "../../hooks/useCartActions/useCartActions";
import "./ItemInCart.css";

function ItemInCart({ phone }) {
  const { removeFromCart } = useCartActions();

  return (
    <div className="item-in-cart">
      <img
        className="item-in-cart__image"
        src={phone.imageUrl}
        alt={`${phone.name} ${phone.colorName}`}
      />
      <div className="item-in-cart__details">
        <div>
          <h2 className="item-in-cart__name">{phone.name}</h2>
          <p className="item-in-cart__info">
            {phone.capacity} | {phone.colorName}
          </p>
          <p className="item-in-cart__price">{phone.price} eur</p>
        </div>
        <button
          className="item-in-cart__remove-button"
          onClick={() => removeFromCart(phone.id)}
        >
          eliminar
        </button>
      </div>
    </div>
  );
}

ItemInCart.propTypes = {
  phone: PropTypes.shape({
    id: PropTypes.string.isRequired,
    capacity: PropTypes.string.isRequired,
    colorName: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }),
};

export default ItemInCart;
