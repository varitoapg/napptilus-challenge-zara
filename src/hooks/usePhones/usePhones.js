import { useEffect } from "react";
import { usePhoneContext } from "../../contexts/PhoneContext/PhoneContext";

export const usePhones = (search = "") => {
  const { phones, loading, error, loadPhones } = usePhoneContext();

  useEffect(() => {
    loadPhones(search);
  }, [loadPhones, search]);

  return { phones, loading, error };
};
