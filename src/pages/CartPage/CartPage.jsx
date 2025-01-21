import CartDisplay from "../../components/CartDisplay/CartDisplay";
import PaymentSection from "../../components/PaymentSection/PaymentSection";
import { useCartInformation } from "../../hooks/useCartInformation/useCartInformation";
import "./CartPage.css";

function CartPage() {
  const { phonesInCart } = useCartInformation();
  return (
    <main className="cart-page">
      <div>
        <p className="cart-page__total">{`cart (${phonesInCart})`}</p>
        <CartDisplay />
      </div>
      <PaymentSection />
    </main>
  );
}

export default CartPage;
