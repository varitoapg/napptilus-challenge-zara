import PropTypes from "prop-types";
import "./Button.css";

const Button = ({ children, theme = "black", disabled = false, ...props }) => {
  return (
    <button
      className={`custom-button ${theme} ${disabled ? "disabled" : ""}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};
Button.propTypes = {
  children: PropTypes.string.isRequired,
  theme: PropTypes.oneOf(["white", "black"]),
  disabled: PropTypes.bool,
};

export default Button;
