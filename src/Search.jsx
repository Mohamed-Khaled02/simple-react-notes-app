import React from "react";
import { MdSearch } from "react-icons/md";

function Search({ handelChange }) {
  return (
    <div className="search-container">
      <input
        placeholder="Search for Notes..."
        name="search"
        className="search-input"
        type="text"
        onChange={(e) => handelChange(e.target.value)}
      />
      <label htmlFor="search">
        <MdSearch size="1.4rem" />
      </label>
    </div>
  );
}

export default Search;
