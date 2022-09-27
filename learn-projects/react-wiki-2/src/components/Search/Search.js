import React from "react";
import stales from "./Search.module.scss";
//import {connect} from 'react-redux'


const Search = ({ setSearch, setPageNumber,onAddCaaracters, testStore }) => {
 function addCaracters(){
console.log(document.getElementById("quantity").value)
onAddCaaracters(document.getElementById("quantity").value)
 }
  return (
    <form className="d-flex justify-content-center gap-4 mb-5">
      <input
        onChange={(e) => {
          setPageNumber(1); //функция которая работает после окончания значения элемента формы
          setSearch(e.target.value);
        }}
        placeholder="Search for Characters "
        type="text"
        className={stales.input}
        id="quantity"
      />
      <button
        onClick={(e) => {
          e.preventDefault();
          addCaracters();
          console.log(testStore)
        }}
        className="btn btn-primary"
      >
        Search
      </button>
    </form>
  );
};

export default Search

/*
export default connect(
  state =>({
    testStore: state
  }),
  dispatch=>({
    onAddCaaracters: (CaracterName)=>{
      dispatch({type:"ADD_TRACK", payload: CaracterName})
    }
  }),
)(Search);*/







/*import React, {Component} from "react";
import stales from "./Search.module.scss";
import {connect} from 'react-redux'
class Search extends Component{
render ( setSearch, setPageNumber ){
console.log(this.ptops.testStore);
  return (
    <form className="d-flex justify-content-center gap-4 mb-5">
      <input
        onChange={(e) => {
          setPageNumber=1; 
          setSearch=e.target.value;
        }}  
        placeholder="Search for Characters "
        type="text"
        className={stales.input}

      />
      <button
        onClick={(e) => {
          e.preventDefault();
          console.log("films")
        }}
        className="btn btn-primary"
      
      >
        Search
      </button>
    </form>
  );
}

}

export default connect(
  state =>({
    testStore: state
  }),
)(Search);*/
