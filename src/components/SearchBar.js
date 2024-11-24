import React from "react";

const SearchBar = ({ searchTerm, onSearch }) => {
  return (
    <div className="search-bar">
      <div className="search-bar-content">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => onSearch(e.target.value)}
          placeholder="Search..."
        />
        <button onClick={() => onSearch(searchTerm)}>Search</button>
      </div>
    </div>
  );
};

export default SearchBar;
