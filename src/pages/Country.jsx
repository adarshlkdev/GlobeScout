import { useEffect, useState } from "react";
import { useTransition } from "react";
import { getCountryData } from "../api/postApi";
import { Loader } from "../components/UI/Loader";
import { CountryCard } from "./../components/Layout/CountryCard";
import { SearchFilter } from "./../components/UI/SeachFilter";
import { BiArrowBack, BiArrowFromLeft, BiArrowFromRight } from "react-icons/bi";

export const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [countryData, setCountryData] = useState([]);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryData();
      setCountryData(res.data);
    });
  }, []);

  if (isPending) {
    return <Loader />;
  }

  const searchCountry = (country) => {
    if (search) {
      return country.name.common.toLowerCase().includes(search.toLowerCase());
    }
    return true;
  };

  const filterRegion = (country) => {
    if (filter === "All") {
      return true;
    }
    return country.region === filter;
  };

  const filterCountries = countryData.filter(
    (country) => searchCountry(country) && filterRegion(country)
  );

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filterCountries.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <section className="country-section">
      <SearchFilter
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
        countryData={countryData}
        setCountryData={setCountryData}
      />
      <ul className="grid grid-four-cols">
        {currentItems.map((country, index) => {
          return <CountryCard country={country} key={index} />;
        })}
      </ul>
      <div className="pagination-controls">
        <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
        <BiArrowFromRight/> Previous
        </button>
        <button onClick={() => paginate(currentPage + 1)} disabled={indexOfLastItem >= filterCountries.length}>
          Next <BiArrowFromLeft />
        </button>
      </div>
    </section>
  );
};