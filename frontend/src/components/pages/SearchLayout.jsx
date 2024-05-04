import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import FeaturedHouse from "./SearchFeaturedHouses";
import SearchSidebar from "./SearchSidebar";

function Search() {
  return (
    <>
      <div className="search-page">
        <div className="searchbar-page">

          <SearchBar />

        </div>
        <div className="search-holder-page">
          <div className="search-body-page">
            <div className="searchresults-page">
              <SearchResults />
            </div>

            <div className="search-featuredhouse-page">
              <FeaturedHouse />
            </div>
          </div>

          <div className="search-sidebar-page">
            <SearchSidebar />
          </div>
        </div>
      </div>
    </>
  );
}

export default Search;
