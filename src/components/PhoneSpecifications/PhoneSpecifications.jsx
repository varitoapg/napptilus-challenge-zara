import PropTypes from "prop-types";
import { addSpaceBeforeUppercase } from "../../utils/strings/strings";
import "./PhoneSpecifications.css";

function PhoneSpecifications({ phoneSpecifications }) {
  return (
    <div className="phone-specifications">
      <h2 className="phone-specfications__title">specifications</h2>
      <ul className="phone-specifications__list">
        {Object.entries(phoneSpecifications).map(([key, value]) => (
          <li key={key} className="phone-specifications__item">
            <h3 className="phone-specifications__item-title">
              {addSpaceBeforeUppercase(key)}
            </h3>
            <span className="phone-specifications__description">{value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

PhoneSpecifications.propTypes = {
  phoneSpecifications: PropTypes.object.isRequired,
};

export default PhoneSpecifications;
