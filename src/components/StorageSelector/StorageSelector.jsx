import Button from "../UI/Button/Button";
import PropTypes from "prop-types";
import "./StorageSelector.css";

function StorageSelector({
  storageOptions,
  handleStorageChange,
  selectedStorage,
}) {
  return (
    <div className="storage-selector">
      <label htmlFor="storage-options" className="storage-selector__label">
        Storage, how much space do you need?
      </label>
      <div className="storage-selector__buttons" id="storage-options">
        {storageOptions.map((option) => (
          <Button
            key={option.capacity}
            onClick={() => handleStorageChange(option)}
            theme="white"
            className={`storage-selector__button ${
              selectedStorage?.capacity === option.capacity
                ? "storage-selector__button--selected"
                : "storage-selector__button--no-selected"
            }`}
            aria-selected={
              selectedStorage?.capacity === option.capacity ? "true" : "false"
            }
            role="button"
          >
            {option.capacity}
          </Button>
        ))}
      </div>
    </div>
  );
}

StorageSelector.propTypes = {
  storageOptions: PropTypes.arrayOf(
    PropTypes.shape({
      capacity: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
  handleStorageChange: PropTypes.func.isRequired,
  selectedStorage: PropTypes.shape({
    capacity: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }),
};

export default StorageSelector;
