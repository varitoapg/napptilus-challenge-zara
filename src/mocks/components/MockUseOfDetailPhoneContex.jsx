import React from "react";
import { usePhoneContext } from "../../contexts/PhoneContext/PhoneContext";

export const MockUseOfDetailPhoneContex = () => {
  const id = "123";
  const { phoneDetails, loadPhoneDetails, loading, error } = usePhoneContext();

  React.useEffect(() => {
    loadPhoneDetails(id);
  }, [loadPhoneDetails]);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {phoneDetails && (
        <>
          <p>{phoneDetails.name}</p>
          <p>{phoneDetails.brand}</p>
        </>
      )}
    </div>
  );
};
