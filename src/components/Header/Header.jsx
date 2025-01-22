import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useCartInformation } from "../../hooks/useCartInformation/useCartInformation";
import EmptyCartIcon from "../UI/icons/EmptyCartIcon/EmptyCartIcon";
import FullCartIcon from "../UI/icons/FullCartIcon/FullCartIcon";
import Logo from "../UI/icons/Logo/Logo";
import "./Header.css";

function Header({ children }) {
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
      {children}
    </header>
  );
}

Header.propTypes = {
  children: PropTypes.element,
};

export default Header;
