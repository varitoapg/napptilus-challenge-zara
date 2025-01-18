import PropTypes from "prop-types";
import PhoneCard from "../PhoneCard/PhoneCard";
import "./PhoneCardList.css";

function PhoneCardList({ phones }) {
  return (
    <div className="phone-grid">
      {phones.map((phone) => (
        <PhoneCard phone={phone} key={phone.id} />
      ))}
    </div>
  );
}

PhoneCardList.propTypes = {
  phones: PropTypes.arrayOf(PropTypes.object),
};

export default PhoneCardList;
