import Filters from "./components/Filter/Filter";
import Cards from "./components/Card/Card";
import React from "react";
import Pagination from "./components/Pagination/Pagination";
import Search from "./components/Search/Search";
import styles from "./components/Card/Card.module.scss";
import { connect } from 'react-redux'
import useCaracters from "./hoock/useCaracters";



const Home = () => {
  const { pageNumber, setPageNumber, info, status, updateStatus, updateGender, updateSpecies, debonse,search } = useCaracters();
  return (
    <div className="App">
      <h1 className={`${styles['impotant-title']} text-center mp-4`}>aymlMenu</h1>
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
              <Cards page="/" />
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
  (state) => ({
    cards: state.cards
  }),
  dispatch => ({
    addCards: (cards) => {
      dispatch({ type: "ADD_CARDS", payload: cards })
    }
  }),
)(Home);
