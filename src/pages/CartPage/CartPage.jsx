import CartDisplay from "../../components/CartDisplay/CartDisplay";
import Header from "../../components/Header/Header";
import PaymentSection from "../../components/PaymentSection/PaymentSection";
import { useCartInformation } from "../../hooks/useCartInformation/useCartInformation";
import "./CartPage.css";

function CartPage() {
  const { phonesInCart } = useCartInformation();
  return (
    <>
      <Header />
      <main className="cart-page">
        <div>
          <p className="cart-page__total">{`cart (${phonesInCart})`}</p>
          <CartDisplay />
        </div>
        <PaymentSection />
      </main>
    </>
  );
}

export default CartPage;
