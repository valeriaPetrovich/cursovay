import Filters from "./components/Filter/Filter";
import Cards from "./components/Card/Card";
import React, {useState} from "react";
import Pagination from "./components/Pagination/Pagination";
import styles from "./components/Card/Card.module.scss";
import useCaracters from "./hoock/useCaracters";
import SearchTest from "./components/SearchTest";
import useFilter from "./hoock/useFilter";


const Home = () => {
  const { status } = useCaracters();
	const [currentPage, setCurrentPage] = useState(1);
	const LIMIT = 12;
  const {myFilt} = useFilter();
	let sliceResults = myFilt.slice(LIMIT * (currentPage - 1), currentPage * LIMIT);
	const total = 240

  return (
    <div className="App">
      <h1 className={`${styles['impotant-title']} text-center mp-4`}>aymlMenu</h1>
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
/**
 *      <Filters
            pageNumber={pageNumber}
            status={status}
            updateStatus={updateStatus}
            updateGender={updateGender}
            updateSpecies={updateSpecies}
            setPageNumber={setPageNumber}
          />
 */