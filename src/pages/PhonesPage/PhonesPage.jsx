import { usePhones } from "../../hooks/usePhones/usePhones";
import { useSearchPhone } from "../../hooks/useSearchPhone/useSearchPhone";
import PhoneCardList from "../../components/PhoneCardList/PhoneCardList";
import SearchPhoneInput from "../../components/SearchPhoneInput/SearchPhoneInput";
import Header from "../../components/Header/Header";
import QueryWrapper from "../../components/UI/QueryWrapper/QueryWrapper";
import "./PhonesPage.css";

function PhonesPage() {
  const { searchQuery, setSearchQuery, debouncedQuery, handlerClear } =
    useSearchPhone();
  const { phones, totalPhones, loading, error } = usePhones(debouncedQuery);

  return (
    <>
      <Header>
        <div className="phones-page__search-wrapper">
          <SearchPhoneInput
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            handleClear={handlerClear}
          />
          <p className="phones-page__results-count">{totalPhones} results</p>
        </div>
      </Header>
      <main className="phones-page">
        <QueryWrapper error={error} loading={loading}>
          {phones.length > 0 && (
            <div className="phones-page__content">
              <PhoneCardList phones={phones} />
            </div>
          )}
        </QueryWrapper>
      </main>
    </>
  );
}

export default PhonesPage;
