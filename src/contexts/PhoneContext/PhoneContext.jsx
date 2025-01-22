import { createContext, useCallback, useContext, useState } from "react";
import PropTypes from "prop-types";
import { fetchPhones } from "../../services/phonesServices/phonesServices";
import { fetchPhoneDetail } from "../../services/phoneDetailServices/phoneDetailServices";
import { removeDuplicatesById } from "../../utils/arrays/arrays";
import phoneListAdapter from "../../adapters/phones/phoneListAdapter/phoneListAdapter";
import phoneDetailsAdapter from "../../adapters/phones/phoneDetailsAdapter/phoneDetailsAdapter";

const PhoneContext = createContext();

export const PhoneProvider = ({ children }) => {
  const [phones, setPhones] = useState([]);
  const [phoneDetails, setPhoneDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const loadPhones = useCallback(async (search = "") => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchPhones(search);
      const uniquePhones = removeDuplicatesById(data);
      const parsedPhones = phoneListAdapter(uniquePhones);
      setPhones(parsedPhones);
    } catch (err) {
      setError("Failed to load phones: " + err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  const loadPhoneDetails = useCallback(async (phoneId) => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchPhoneDetail(phoneId);
      const parsedPhones = phoneDetailsAdapter(data); // Call the adapter function
      setPhoneDetails(parsedPhones);
    } catch (err) {
      setError("Failed to load phone details: " + err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <PhoneContext.Provider
      value={{
        phones,
        loadPhones,
        phoneDetails,
        loadPhoneDetails,
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
