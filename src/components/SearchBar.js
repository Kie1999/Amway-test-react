import React from "react";

const SearchBar = ({ searchTerm, onSearch }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => onSearch(e.target.value)}
        placeholder="Search..."
      />
      <button onClick={() => onSearch(searchTerm)}>Search</button>
    </div>
  );
};

export default SearchBar;
