import PropTypes from "prop-types";
import Loader from "../Loader/Loader";
import ErrorCard from "../ErrorCard/ErrorCard";
import "./QueryWrapper.css";

function QueryWrapper({ children, error, loading }) {
  return (
    <>
      {loading && (
        <div className="query-wrapper__loader">
          <Loader />
        </div>
      )}
      {error && <ErrorCard errorMessage={error} />}
      {children}
    </>
  );
}

QueryWrapper.propTypes = {
  children: PropTypes.node,
  error: PropTypes.string,
  loading: PropTypes.bool,
};

export default QueryWrapper;
