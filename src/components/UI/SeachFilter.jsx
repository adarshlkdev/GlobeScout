export const SearchFilter = ({
  search,
  setSearch,
  filter,
  setFilter,
  countryData,
  setCountryData,
}) => {
  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSelectChange = (e) => {
    setFilter(e.target.value);
  };

  const sortCountries = (order) => {
    const sortCountry = [...countryData].sort((a, b) => {
      return order === "asc"
        ? a.name.common.localeCompare(b.name.common)
        : b.name.common.localeCompare(a.name.common);
    });
    setCountryData(sortCountry);
  };

  return (
    <section className="section-searchFilter container">
      <div>
        <input
          type="text"
          placeholder="search"
          value={search}
          onChange={handleInputChange}
          className="select-section"
        />
      </div>

      <div>
        <button onClick={() => sortCountries("asc")}>Asc</button>
      </div>

      <div>
        <button onClick={() => sortCountries("des")}>Desc</button>
      </div>
      <div>
        <select
          className="select-section"
          value={filter}
          onChange={handleSelectChange}
        >
          <option value="All">All</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </section>
  );
};
