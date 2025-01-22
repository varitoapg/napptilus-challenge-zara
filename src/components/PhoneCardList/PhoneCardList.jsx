import PropTypes from "prop-types";
import PhoneCard from "../PhoneCard/PhoneCard";
import "./PhoneCardList.css";

function PhoneCardList({ phones, isHorizontal = false, title = "" }) {
  return (
    <div>
      {title && <h2 className="phone-card-list__title">{title}</h2>}
      <div
        className={isHorizontal ? "phone-grid-horizontal" : "phone-grid"}
        data-testid="phone-card-list"
      >
        {phones.map((phone) => (
          <PhoneCard
            phone={phone}
            key={phone.id}
            layout={isHorizontal ? "horizontal" : "grid"}
          />
        ))}
      </div>
    </div>
  );
}

PhoneCardList.propTypes = {
  title: PropTypes.string,
  phones: PropTypes.arrayOf(PropTypes.object),
  isHorizontal: PropTypes.bool,
};

export default PhoneCardList;
