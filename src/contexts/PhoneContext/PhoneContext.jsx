import { createContext, useCallback, useContext, useState } from "react";
import { fetchPhones } from "../../services/phonesServices/phonesServices";
import PropTypes from "prop-types";

const PhoneContext = createContext();

export const PhoneProvider = ({ children }) => {
  const [phones, setPhones] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const loadPhones = useCallback(async (search = "") => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchPhones(search);
      setPhones(data);
    } catch (err) {
      setError("Failed to load phones: " + err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <PhoneContext.Provider
      value={{
        phones,
        loadPhones,
        loading,
        error,
      }}
    >
      {children}
    </PhoneContext.Provider>
  );
};

PhoneProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const usePhoneContext = () => {
  return useContext(PhoneContext);
};
