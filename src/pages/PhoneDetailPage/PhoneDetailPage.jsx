import { Link } from "react-router-dom";
import { usePhoneDetails } from "../../hooks/usePhoneDetails/usePhoneDetails";
import { removeDuplicatesById } from "../../utils/arrays/arrays";
import PhoneCardList from "../../components/PhoneCardList/PhoneCardList";
import PhoneForm from "../../components/PhoneForm/PhoneForm";
import PhoneSpecifications from "../../components/PhoneSpecifications/PhoneSpecifications";
import Header from "../../components/Header/Header";
import LeftChevronIcon from "../../components/UI/icons/LeftChevronIcon/LeftChevronIcon";
import QueryWrapper from "../../components/QueryWrapper/QueryWrapper";
import "./PhoneDetailPage.css";

function PhoneDetailPage() {
  const { phoneDetails, error, loading } = usePhoneDetails();

  return (
    <>
      <Header>
        <Link to="/" className="header__back-link">
          <LeftChevronIcon />
          <p>back</p>
        </Link>
      </Header>
      <main className="phone-detail-page">
        <QueryWrapper error={error} loading={loading}>
          {phoneDetails && (
            <div className="phone-detail-page__content">
              <PhoneForm
                colorOptions={phoneDetails.colorOptions}
                name={phoneDetails.name}
                basePrice={phoneDetails.basePrice}
                storageOptions={phoneDetails.storageOptions}
              />
              <PhoneSpecifications phoneSpecifications={phoneDetails.specs} />
              <PhoneCardList
                title="Similar Items"
                phones={removeDuplicatesById(phoneDetails.similarProducts)}
                isHorizontal
              />
            </div>
          )}
        </QueryWrapper>
      </main>
    </>
  );
}

export default PhoneDetailPage;
