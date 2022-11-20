import Cards from "../components/Card/Card";
import React, { useState, useEffect } from "react";
import Pagination from "../components/Pagination/Pagination";
import styles from './styles.module.scss';
import SearchTest from "../components/SearchTest";
import useFilter from "../hoock/useFilter";
import Header from "../components/Header";
import vetka from '../../src/assets/Group 13.png'
import vetkaBottom from '../../src/assets/Group 14.png'
import Filters from "../components/Filters";
import scanSVG from '../assets/scan.svg'
import { NavLink } from "react-router-dom";
import useMeals from "../hoock/useMeals";
import { useDispatch } from 'react-redux';
import { setResults } from '../store/reducer/resultsSlice';


const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const LIMIT = 12;
  const { myFilt } = useFilter();
  let sliceResults = myFilt.slice(LIMIT * (currentPage - 1), currentPage * LIMIT);
  const total = 240;

  return (
    <div className="App">
    
        <img src={vetka} alt='' className={styles.vetka1} />
      
      
      <Header />
      <div className="container ">

      <NavLink to={'/scan'}>
      <img src={scanSVG} alt=''/>
    
        </NavLink>
        
        <SearchTest />
        <Filters />
        <div className={`${styles.content} col-8 mt-5`}>
          <div className="row">
            <Cards page="/" sliceResults={sliceResults} />
          </div>
        </div>
        <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} total={total} />
      </div>

      <img src={vetkaBottom} alt='' className={styles.vetka2} />

    </div>
  );


};

/**
 *  <Filters
            status={status}
          />
 */


export default Home;
/**
 * <Header/>
      <SearchTest />
      <div className="container ">
        <div className="row">
        <Filters
            status={status}
          />
          <div className={`${styles.content} col-8`}>
            <div className="row ">
              <Cards page="/" sliceResults={sliceResults} />
            </div>
          </div>
        </div>
      </div>
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} total={total} />
 */