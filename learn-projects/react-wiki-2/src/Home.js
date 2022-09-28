import Debounce from "./Debounce";
import Filters from "./components/Filter/Filter";
import Cards from "./components/Card/Card";
import React, { useState, useEffect } from "react";
import Pagination from "./components/Pagination/Pagination";
import Search from "./components/Search/Search";
import styles from "./components/Card/Card.module.scss";
import {connect} from 'react-redux'
import axios from "axios";

const useCaracters=()=>{
  let [pageNumber, setPageNumber] = useState(1); //состояние влияет на переключение имен и самих карточек
  let [fetchedData, updateFetchedData] = useState([]); //состояние карт
  let { info, results } = fetchedData;
  let [search, setSearch] = useState("");
  let [status, updateStatus] = useState("");
  let [gender, updateGender] = useState("");
  let [species, updateSpecies] = useState("");
  const debonse = Debounce((a) => setSearch(a), 500);
  /*
  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;
  useEffect(() => {
    //информация из api
    
    async function Async() {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    }
    Async();
  }, [api]);*/
  

  ////////////////useMeals///////////////////////////
  let [fetcheMeals, setMeals] = useState([]);
  /////////////////getMeals/////////////////////////
  async function getApi() {
    const meals = [];
    let apiCoock = 'https://www.themealdb.com/api/json/v1/1/search.php?f=';
    let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'r', 's', 't', 'v', 'w', 'y'];
    const promises = letters.map((letter) => {
      return axios.get(apiCoock + letter);
    })

    const res = await Promise.all(promises);
    res.forEach((result) => {
      meals.push(result.data.meals);
      setMeals(meals)
    });
  }
  useEffect(() => {
    getApi();
  }, [])
  ///////////////////////////////////////////////////////

  return {pageNumber, setPageNumber, fetchedData, updateFetchedData, info, results, search, setSearch, status, updateStatus, gender, updateGender, species, updateSpecies, debonse}
}


const Home = ({addCards, cards}) => {
  


const a=useCaracters();
const {pageNumber, setPageNumber,info, results, status, updateStatus,  updateGender,  updateSpecies, debonse}=a;
useEffect(() => {
  addCards(results ?? []);
}, [results]);
  return (
    <div className="App">
      <h1 className="text-center mp-4">aymlMenu</h1>

      <Search setPageNumber={setPageNumber} setSearch={debonse} />
      <div className="container ">
        <div className="row">
          <Filters
            pageNumber={pageNumber}
            status={status}
            updateStatus={updateStatus}
            updateGender={updateGender}
            updateSpecies={updateSpecies}
            setPageNumber={setPageNumber}
          />
          <div className={`${styles.content} col-8`}>
            <div className="row ">
              <Cards page="/" results={results} />
            </div>
          </div>
        </div>
      </div>
      <Pagination
        info={info}
        setPageNumber={setPageNumber}
        pageNumber={pageNumber}
      />
    </div>
  );


};

export default connect(
  (state)=>({
    cards:state.cards
  }),
  dispatch=>({
    addCards: (cards)=>{
      dispatch({type:"ADD_CARDS", payload: cards})
    }
  }),
)(Home);
