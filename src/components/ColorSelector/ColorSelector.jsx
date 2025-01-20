import PropTypes from "prop-types";
import "./ColorSelector.css";

function ColorSelector({ colorOptions, handleSelection, selectedColor }) {
  return (
    <div className="color-selector">
      <label className="color-selector__title">
        Color, pick your favourite
      </label>
      <div className="color-selector__container">
        {colorOptions.map((option) => (
          <div
            key={option.hexCode}
            className={`color-selector__item ${
              selectedColor.hexCode === option.hexCode
                ? "color-selector__item--selected"
                : ""
            }`}
            onClick={() => handleSelection(option.hexCode)}
            role="button"
            aria-label={option.name}
          >
            <div
              className="color-selector__inner"
              style={{ backgroundColor: option.hexCode }}
            />
          </div>
        ))}
      </div>
      {selectedColor && (
        <div className="color-selector__selected-name">
          {selectedColor.name}
        </div>
      )}
    </div>
  );
}

ColorSelector.propTypes = {
  colorOptions: PropTypes.arrayOf(
    PropTypes.shape({
      hexCode: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  handleSelection: PropTypes.func.isRequired,
  selectedColor: PropTypes.shape({
    hexCode: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
  }),
};

export default ColorSelector;
