import "./PhoneCard.css";
import PropTypes from "prop-types";

function PhoneCard({ phone }) {
  return (
    <article className="phone-card">
      <img
        src={phone.imageUrl}
        alt={phone.name}
        className="phone-card__image"
      />
      <div className="phone-card__content">
        <div className="phone-card__information">
          <p className="phone-card__brand">{phone.brand}</p>
          <p className="phone-card__name">{phone.name}</p>
        </div>
        <div className="phone-card__price">{phone.basePrice} EUR</div>
      </div>
    </article>
  );
}

PhoneCard.propTypes = {
  phone: PropTypes.shape({
    imageUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    basePrice: PropTypes.number.isRequired,
  }).isRequired,
};

export default PhoneCard;
