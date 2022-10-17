import React, {useState} from "react";
import { debounce } from 'lodash';
import { useDispatch} from 'react-redux';
import { setSearchSlise } from "../../store/reducer/searchSlice";
import { useEffect } from "react";

const SearchTest = () => {
  const [searchState, setSearchState] = useState('');
  const dispatch = useDispatch();
  const fetcheSearch = () => {
	dispatch(setSearchSlise(searchState));
};
useEffect(()=>{
    fetcheSearch();
})
  const handleInput = debounce((e) => setSearchState(e.target.value), 500);
  return (
    <form className="d-flex justify-content-center gap-4 mb-5">
      <input
        onChange={handleInput}
        placeholder="Search for Characters "
        type="text"
        id="quantity"
      />
    </form>
  );
};

export default SearchTest;