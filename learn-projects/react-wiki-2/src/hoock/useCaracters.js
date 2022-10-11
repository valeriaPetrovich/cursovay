import { useState } from "react";
import Debounce from "../Debounce";

const useCaracters = () => {
  let [pageNumber, setPageNumber] = useState(1); //состояние влияет на переключение имен и самих карточек
  let [fetchedData, updateFetchedData] = useState([]); //состояние карт
  let { info, results } = fetchedData;
  let [search, setSearch] = useState("");
  let [status, updateStatus] = useState("");
  let [gender, updateGender] = useState("");
  let [species, updateSpecies] = useState("");
  const debonse = Debounce((a) => setSearch(a), 500);
  return { pageNumber, setPageNumber, fetchedData, updateFetchedData, info, results, search, setSearch, status, updateStatus, gender, updateGender, species, updateSpecies, debonse }
}

export default useCaracters;