import { usePhoneDetails } from "../../hooks/usePhoneDetails/usePhoneDetails";

export const MockedUseOfusePhoneDetails = () => {
  const { phoneDetails, loading, error } = usePhoneDetails();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

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
