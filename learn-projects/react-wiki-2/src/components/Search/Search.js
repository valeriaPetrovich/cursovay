import React from "react";
import stales from "./Search.module.scss";


const Search = ({ setSearch, search }) => {
  return (
    <form className="d-flex justify-content-center gap-4 mb-5">
      <input
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        placeholder="Search for Characters "
        type="text"
        className={stales.input}
        id="quantity"
        value={search}
      />
      <button
        onClick={(e) => {
          e.preventDefault();
        }}
        className="btn btn-primary"
      >
        Search
      </button>
    </form>
  );
};

export default Search;