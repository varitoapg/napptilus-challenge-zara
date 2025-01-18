import PropTypes from "prop-types";
import "./SearchPhoneInput.css";

function SearchPhoneInput({ searchQuery, onSearchChange }) {
  return (
    <input
      type="text"
      placeholder="Search for a smartphone..."
      value={searchQuery}
      onChange={(e) => onSearchChange(e.target.value)}
      className="search-phone-input"
    />
  );
}

SearchPhoneInput.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  onSearchChange: PropTypes.func.isRequired,
};

export default SearchPhoneInput;
