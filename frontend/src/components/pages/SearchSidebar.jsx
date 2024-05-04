
function Sidebar() {
  return (
    <div className="sidebar">
      {/* Sidebar content */}
      <div className="nearby-cities">
        <h3>Nearby Cities</h3>
        {/* List of nearby cities */}
      </div>
      <div className="related-searches">
        <h3>Related Searches</h3>
        {/* List of related searches */}
      </div>
      <div className="available-for-sell">
        <h3>Currently Available for Sale</h3>
        {/* Small boxes for currently available for sale */}
      </div>
    </div>
  );
}

export default Sidebar;
