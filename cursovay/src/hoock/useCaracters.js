import { useState } from "react";

const useCaracters = () => {
  let [pageNumber, setPageNumber] = useState(1); //состояние влияет на переключение имен и самих карточек
  let [search, setSearch] = useState("");
  let [status, updateStatus] = useState("");
  let [gender, updateGender] = useState("");
  let [species, updateSpecies] = useState("");
  return { pageNumber, setPageNumber, search, setSearch, status, updateStatus, gender, updateGender, species, updateSpecies}

}

export default useCaracters;
