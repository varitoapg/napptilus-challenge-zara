import { useCartInformation } from "../../hooks/useCartInformation/useCartInformation";
import ItemInCart from "../ItemInCart/ItemInCart";
import "./CartDisplay.css";

function CartDisplay() {
  const { cart } = useCartInformation();

  return (
    <div>
      {cart.length > 0 && (
        <ul className="cart-list">
          {cart.map((phone) => (
            <li key={phone.name}>
              <ItemInCart phone={phone} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CartDisplay;
