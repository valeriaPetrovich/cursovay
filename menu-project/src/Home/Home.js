//import Filters from "../components/Filter/Filter";
import Cards from "../components/Card/Card";
import React, {useState} from "react";
import Pagination from "../components/Pagination/Pagination";
import styles from './styles.module.scss';
//import useCaracters from "../hoock/useCaracters";
import SearchTest from "../components/SearchTest";
import useFilter from "../hoock/useFilter";
import Header from "../components/Header";
//import vetka from '../../src/assets/Group 14.svg'


const Home = () => {
  //const { status } = useCaracters();
	const [currentPage, setCurrentPage] = useState(1);
	const LIMIT = 12;
  const {myFilt} = useFilter();
	let sliceResults = myFilt.slice(LIMIT * (currentPage - 1), currentPage * LIMIT);
	const total = 240;

  return (
    <div className="App">
    <Header/>
      <div className="container ">
      <SearchTest />
          <div className={`${styles.content} col-8 mt-5`}>
            <div className="row g-5">
              <Cards page="/" sliceResults={sliceResults} />
            </div>
          </div>
        </div>
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} total={total} />
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