import React from "react";
import stales from "./Search.module.scss";
import useCaracters from "../../hoock/useCaracters";
import { debounce } from 'lodash';



const Search = () => {
  const {setSearch } = useCaracters();
  const handleInput = debounce((e) => setSearch(e.target.value), 500);
  return (
    <form className="d-flex justify-content-center gap-4 mb-5">
      <input
        onChange={handleInput}
        placeholder="Search for Characters "
        type="text"
        className={stales.input}
        id="quantity"
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