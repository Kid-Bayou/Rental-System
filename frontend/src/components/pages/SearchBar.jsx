function SearchBar() {
  return (
    <>
      <div className="search-filter-container">
        <div className="search-filter-box">
          <label className="search-filter-label">Enter a location</label>

          <select name="location" className="search-filter-select">
            <option>Addis Ababa</option>
            <option>Gonder</option>
            <option>Mekele</option>
            <option>Arba Minch</option>
          </select>
        </div>
        <div className="search-filter-box">
          <label className="search-filter-label">Bedrooms</label>

          <select name="location" className="search-filter-select">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>+</option>
          </select>
        </div>
        <div className="search-filter-box">
          <label className="search-filter-label">Price</label>

          <select name="location" className="search-filter-select">
            <option>$1000-$5000</option>
            <option>$5000-$10000</option>
            <option>$10000-$20000</option>
            <option>$20000-$30000</option>
          </select>
        </div>
        <div className="search-filter-box">
          <label className="search-filter-label">Property Type</label>

          <select name="location" className="search-filter-select">
            <option>Apartment</option>
            <option>Studio</option>
            <option>Condominium</option>
            <option>House</option>
          </select>
        </div>
        <button>Filters</button>
        <button>Save</button>
      </div>
    </>
  );
}

export default SearchBar;
