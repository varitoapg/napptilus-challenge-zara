import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { usePhoneContext } from "../../contexts/PhoneContext/PhoneContext";

export const usePhoneDetails = () => {
  const { phoneId } = useParams();
  const { phoneDetails, loading, error, loadPhoneDetails } = usePhoneContext();

  useEffect(() => {
    loadPhoneDetails(phoneId);
  }, [loadPhoneDetails, phoneId]);

  return { phoneDetails, loading, error };
};
