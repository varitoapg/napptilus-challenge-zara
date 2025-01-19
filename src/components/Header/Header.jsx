import { Link } from "react-router-dom";
import EmptyCartIcon from "../EmptyCartIcon/EmptyCartIcon";
import FullCartIcon from "../FullCartIcon/FullCartIcon";
import { useCartInformation } from "../../hooks/useCartInformation/useCartInformation";
import Logo from "../Logo/Logo";
import "./Header.css";

function Header() {
  const { isCartVisible, havePurchases, phonesInCart } = useCartInformation();

  return (
    <header className="header">
      <Link to="/">
        <Logo className="header__logo" />
      </Link>
      {isCartVisible && (
        <div className="header__cart">
          {havePurchases ? <FullCartIcon /> : <EmptyCartIcon />}
          <p>{phonesInCart}</p>
        </div>
      )}
    </header>
  );
}

export default Header;
