import { usePhones } from "../../hooks/usePhones/usePhones";
import { useSearchPhone } from "../../hooks/useSearchPhone/useSearchPhone";
import PhoneCardList from "../../components/PhoneCardList/PhoneCardList";
import SearchPhoneInput from "../../components/SearchPhoneInput/SearchPhoneInput";
import "./PhonesPage.css";
import Header from "../../components/Header/Header";

function PhonesPage() {
  const { searchQuery, setSearchQuery, debouncedQuery } = useSearchPhone();
  const { phones, totalPhones } = usePhones(debouncedQuery);

  return (
    <>
      <Header>
        <div className="phones-page__search-wrapper">
          <SearchPhoneInput
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
          />
          <p className="phones-page__results-count">{totalPhones} results</p>
        </div>
      </Header>
      <main className="phones-page">
        <div className="phones-page__content">
          <PhoneCardList phones={phones} />
        </div>
      </main>
    </>
  );
}

export default PhonesPage;
