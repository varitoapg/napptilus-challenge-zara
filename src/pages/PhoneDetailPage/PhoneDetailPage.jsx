import PhoneCardList from "../../components/PhoneCardList/PhoneCardList";
import PhoneForm from "../../components/PhoneForm/PhoneForm";
import PhoneSpecifications from "../../components/PhoneSpecifications/PhoneSpecifications";
import { usePhoneDetails } from "../../hooks/usePhoneDetails/usePhoneDetails";
import { removeDuplicatesById } from "../../utils/arrays/arrays";
import "./PhoneDetailPage.css";

function PhoneDetailPage() {
  const { phoneDetails } = usePhoneDetails();

  return (
    <div className="phone-detail-page">
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
    </div>
  );
}

export default PhoneDetailPage;
