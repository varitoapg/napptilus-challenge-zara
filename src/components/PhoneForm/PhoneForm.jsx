import PropTypes from "prop-types";
import Button from "../UI/Button/Button";
import { usePhoneSelector } from "../../hooks/usePhoneSelector/usePhoneSelector";
import StorageSelector from "../StorageSelector/StorageSelector";
import ColorSelector from "../ColorSelector/ColorSelector";
import "./PhoneForm.css";

function PhoneForm({ colorOptions, name, basePrice, storageOptions }) {
  const {
    selectedColor,
    selectedStorage,
    handleStorageChange,
    handleColorChange,
    handleSubmitPhone,
  } = usePhoneSelector(colorOptions[0], colorOptions, name);

  return (
    <div className="phone-form">
      <img
        src={selectedColor.imageUrl}
        alt={name}
        className="phone-form__image"
      />
      <div className="phone-form__content">
        <div className="phone-form__header">
          <h2 className="phone-form__header--name">{name}</h2>
          <p className="phone-form__header--price">
            {selectedStorage?.price
              ? `${basePrice}   `
              : `From ${basePrice}   `}
            EUR
          </p>
        </div>

        <div className="phone-form__body">
          <StorageSelector
            storageOptions={storageOptions}
            handleStorageChange={handleStorageChange}
            selectedStorage={selectedStorage}
          />

          <ColorSelector
            colorOptions={colorOptions}
            handleSelection={handleColorChange}
            selectedColor={selectedColor}
          />
        </div>

        <Button
          disabled={!selectedColor || !selectedStorage}
          onClick={handleSubmitPhone}
        >
          Añadir
        </Button>
      </div>
    </div>
  );
}

PhoneForm.propTypes = {
  name: PropTypes.string.isRequired,
  basePrice: PropTypes.number.isRequired,
  storageOptions: PropTypes.arrayOf(
    PropTypes.shape({
      capacity: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })
  ),
  colorOptions: PropTypes.arrayOf(
    PropTypes.shape({
      hexCode: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};

export default PhoneForm;
