import PropTypes from "prop-types";
import "./SearchPhoneInput.css";

function SearchPhoneInput({ searchQuery, onSearchChange, handleClear }) {
  return (
    <div className="search-phone-input-wrapper">
      <label htmlFor="searchPhoneInput" className="visually-hidden">
        Search for a smartphone
      </label>
      <input
        id="searchPhoneInput"
        type="text"
        placeholder="Search for a smartphone..."
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        className="search-phone-input"
      />
      {searchQuery && (
        <button className="clear-input" onClick={handleClear}>
          ×
        </button>
      )}
    </div>
  );
}

SearchPhoneInput.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  onSearchChange: PropTypes.func.isRequired,
  handleClear: PropTypes.func.isRequired,
};

export default SearchPhoneInput;
