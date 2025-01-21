import { useWindowSize } from "@uidotdev/usehooks";
import Button from "../Button/Button";
import { useCartInformation } from "../../hooks/useCartInformation/useCartInformation";
import { useCartActions } from "../../hooks/useCartActions/useCartActions";
import "./PaymentSection.css";

function PaymentSection() {
  const { width } = useWindowSize();
  const { cart, totalPrice } = useCartInformation();
  const { handleContinueShopping } = useCartActions();

  if (width <= 569) {
    return (
      <div className="payment-section">
        {cart.length > 0 && (
          <div className="payment-section__total">
            <p>Total</p>
            <p>{totalPrice} EUR</p>
          </div>
        )}
        <div className="payment-section__buttons">
          <Button theme="white" onClick={handleContinueShopping}>
            Continue shopping
          </Button>
          {cart.length > 0 && <Button>Pay</Button>}
        </div>
      </div>
    );
  }

  return (
    <div className="payment-section">
      <Button
        theme="white"
        className="custom-button white"
        onClick={handleContinueShopping}
      >
        Continue shopping
      </Button>
      {cart.length > 0 && (
        <div className="payment-section__total-and-buttons">
          <div className="payment-section__total">
            <p>Total</p>
            <p>123 EUR</p>
          </div>
          <Button className="custom-button black">Pay</Button>
        </div>
      )}
    </div>
  );
}

export default PaymentSection;
