import Filters from "./components/Filter/Filter";
import Cards from "./components/Card/Card";
import React, {useState} from "react";
import { useSelector } from "react-redux";
import Pagination from "./components/Pagination/Pagination";
import Search from "./components/Search/Search";
import styles from "./components/Card/Card.module.scss";
import useCaracters from "./hoock/useCaracters";
import SearchTest from "./components/SearchTest";


const Home = () => {
  const { pageNumber, setPageNumber, info, status, updateStatus, updateGender, updateSpecies } = useCaracters();
  const results = useSelector((state) => state.results.values);
	const [currentPage, setCurrentPage] = useState(1);
	const LIMIT = 5;
	let sliceResults = results.slice(LIMIT * (currentPage - 1), currentPage * LIMIT);
  console.log(sliceResults.length);
	const total = (results.length / 5) * 10;

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
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} total={total} />
    
    </div>
  );


};


export default Home;
/**
 *   <Pagination
        info={info}
        setPageNumber={setPageNumber}
        pageNumber={pageNumber}
      />
            <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} total={total} />
 */