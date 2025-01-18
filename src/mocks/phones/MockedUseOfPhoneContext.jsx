import React from "react";
import { usePhoneContext } from "../../contexts/PhoneContext/PhoneContext";

export const MockedUseOfPhoneContext = () => {
  const { phones, loadPhones, loading, error } = usePhoneContext();

  React.useEffect(() => {
    loadPhones();
  }, [loadPhones]);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ul>
        {phones.map((phone) => (
          <li key={phone.id}>{phone.name}</li>
        ))}
      </ul>
    </div>
  );
};
