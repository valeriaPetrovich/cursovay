import Filters from "./components/Filter/Filter";
import Cards from "./components/Card/Card";
import React from "react";
import Pagination from "./components/Pagination/Pagination";
import Search from "./components/Search/Search";
import styles from "./components/Card/Card.module.scss";
import useCaracters from "./hoock/useCaracters";
import SearchTest from "./components/SearchTest";


const Home = () => {
  const { pageNumber, setPageNumber, info, status, updateStatus, updateGender, updateSpecies } = useCaracters();

  return (
    <div className="App">
      <h1 className={`${styles['impotant-title']} text-center mp-4`}>aymlMenu</h1>
      <Search />
      <SearchTest />
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


export default Home;
