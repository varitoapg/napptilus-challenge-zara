import { Link, useLocation } from "react-router-dom";
import EmptyCartIcon from "../EmptyCartIcon/EmptyCartIcon";
import FullCartIcon from "../FullCartIcon/FullCartIcon";
import { useCartInformation } from "../../hooks/useCartInformation/useCartInformation";
import Logo from "../Logo/Logo";
import "./Header.css";
import LeftChevronIcon from "../LeftChevronIcon/LeftChevronIcon";

function Header() {
  const { pathname } = useLocation();
  const { isCartVisible, phonesInCart } = useCartInformation();

  return (
    <header className="header">
      <div className="header__content">
        <Link to="/">
          <Logo className="header__logo" />
        </Link>
        {isCartVisible && (
          <Link to="/cart" className="header__cart-link">
            {phonesInCart > 0 ? <FullCartIcon /> : <EmptyCartIcon />}
            <p>{phonesInCart}</p>
          </Link>
        )}
      </div>
      {pathname.includes("/phone") && (
        <Link to="/" className="header__back-link">
          <LeftChevronIcon />
          <p>back</p>
        </Link>
      )}
    </header>
  );
}

export default Header;
