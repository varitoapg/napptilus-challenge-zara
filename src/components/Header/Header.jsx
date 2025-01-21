import { Link } from "react-router-dom";
import EmptyCartIcon from "../EmptyCartIcon/EmptyCartIcon";
import FullCartIcon from "../FullCartIcon/FullCartIcon";
import { useCartInformation } from "../../hooks/useCartInformation/useCartInformation";
import Logo from "../Logo/Logo";
import "./Header.css";

function Header() {
  const { isCartVisible, phonesInCart } = useCartInformation();

  return (
    <header className="header">
      <Link to="/">
        <Logo className="header__logo" />
      </Link>
      {isCartVisible && (
        <Link to="/cart" className="header__cart-link">
          {phonesInCart > 0 ? <FullCartIcon /> : <EmptyCartIcon />}
          <p>{phonesInCart}</p>
        </Link>
      )}
    </header>
  );
}

export default Header;
