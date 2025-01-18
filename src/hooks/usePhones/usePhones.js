import { useEffect } from "react";
import { usePhoneContext } from "../../contexts/PhoneContext/PhoneContext";

export const usePhones = (search = "") => {
  const { phones, loading, error, loadPhones } = usePhoneContext();

  const totalPhones = phones.length;

  useEffect(() => {
    loadPhones(search);
  }, [loadPhones, search]);

  return { phones, loading, error, totalPhones };
};
