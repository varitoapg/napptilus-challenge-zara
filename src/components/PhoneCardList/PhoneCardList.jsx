import PropTypes from "prop-types";
import PhoneCard from "../PhoneCard/PhoneCard";
import "./PhoneCardList.css";

function PhoneCardList({ phones, isHorizontal = false }) {
  return (
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
  );
}

PhoneCardList.propTypes = {
  phones: PropTypes.arrayOf(PropTypes.object),
  isHorizontal: PropTypes.bool,
};

export default PhoneCardList;
