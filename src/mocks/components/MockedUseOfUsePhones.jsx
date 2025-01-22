import { usePhones } from "../../hooks/usePhones/usePhones";
import PropTypes from "prop-types";

export const MockedUseOfUsePhones = ({ search }) => {
  const { phones, loading, error, totalPhones } = usePhones(search);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <p>Total Phones: {totalPhones}</p>
      <ul>
        {phones.map((phone) => (
          <li key={phone.id}>{phone.name}</li>
        ))}
      </ul>
    </>
  );
};

MockedUseOfUsePhones.propTypes = {
  search: PropTypes.string,
};
