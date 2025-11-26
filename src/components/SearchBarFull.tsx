// SearchBarFull — full-width search bar for pages
// TODO: connect debounce and search provider client-side
import React from "react";

const SearchBarFull: React.FC = () => (
  <div className="w-full p-2">
    <input className="w-full border p-2" placeholder="Search the site" />
  </div>
);

export default SearchBarFull;
