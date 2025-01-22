import PropTypes from "prop-types";
import "./ErrorCard.css";

function ErrorCard({ errorMessage }) {
  return (
    <div className="error-card">
      <div className="error-card__icon">⚠️</div>
      <div className="error-card__message">
        <strong>Error:</strong> {errorMessage}
      </div>
    </div>
  );
}

ErrorCard.propTypes = {
  errorMessage: PropTypes.string.isRequired,
};

export default ErrorCard;
