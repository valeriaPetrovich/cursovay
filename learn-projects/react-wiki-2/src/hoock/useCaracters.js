import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchSlise } from "../store/reducer/searchSlice";
import useMeals from "./useMeals";

const useCaracters = () => {
  const dispatch = useDispatch();
  let [pageNumber, setPageNumber] = useState(1); //состояние влияет на переключение имен и самих карточек
  let [search, setSearch] = useState("");
  let [status, updateStatus] = useState("");
  let [gender, updateGender] = useState("");
  let [species, updateSpecies] = useState("");
  const {fetcheMeals} = useMeals();
  const dataStore = fetcheMeals.map((e)=>{
    e.filter((el)=>{
     return el.strMeal === search;
    })
   /* e.map((el)=>{
      return (el.strMeal);
    })*/
  })
 /// console.log(dataStore);
  

  
	const serchResults = useSelector((state) => state.search.values);
	const fetchSearch = () => {
			dispatch(setSearchSlise(search));
	
	};
  return { pageNumber, setPageNumber, search, setSearch, status, updateStatus, gender, updateGender, species, updateSpecies, serchResults, fetchSearch}

}

export default useCaracters;
