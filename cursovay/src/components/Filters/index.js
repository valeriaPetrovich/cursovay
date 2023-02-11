import React, {useEffect} from "react";
import styles from './styles.module.scss';
import { useDispatch } from "react-redux";
import Dropdown from 'react-bootstrap/Dropdown';
import {setMainsSlise, setDesertSlise, setVeganSlise, setStatusNowSlise } from "../../store/reducer/statusSlice";
import useFilter from "../../hoock/useFilter";


const Filters = () => {
  const mainsItems = ["Говядина", "Завтрак", "Курица", "Свинина", "Коза", "Баранина", "Разное", "Паста", "Морепродукты", "Гарнир", "Закуска"]
  const dessertItems = ["Десерт"];
  const veganItems = ["Веганский", "Вегетрианский"];
  const dispatch = useDispatch();
  //const {filtStatus} = useFilter();

  const fetchStatus = () =>{
    dispatch(setMainsSlise(mainsItems));
    dispatch(setDesertSlise(dessertItems));
    dispatch( setVeganSlise(veganItems));
  }

  const getStatusNow = (el) =>{
    dispatch( setStatusNowSlise(el));
  }

  useEffect(()=>{
    fetchStatus();
  })

  return (
<div className={styles.buttonContainer}>
    <h2 className={styles.categories}>Категории</h2>
    <Dropdown bsPrefix={styles.dropdown}>
      <Dropdown.Toggle variant="success" id="dropdown-basic" className={styles['dropdown-button']}>
      Основное 
      </Dropdown.Toggle>

      <Dropdown.Menu className={styles['custom-dropdown']}>
          {mainsItems.map((item, index) => (
          <Dropdown.Item key={index} className={styles['dropdown-items']}  onClick={() => {
            getStatusNow(item);
          }}>
            {item}
            </Dropdown.Item>
          ))}
      </Dropdown.Menu>
    </Dropdown>


    <Dropdown bsPrefix={styles.dropdown}>
      <Dropdown.Toggle variant="success" id="dropdown-basic" className={styles['dropdown-button']}>
      Десерт
      </Dropdown.Toggle>

      <Dropdown.Menu className={styles['custom-dropdown']}>
      {dessertItems.map((item, index) => (
          <Dropdown.Item key={index} className={styles['dropdown-items']} onClick={() => {
            getStatusNow(item);
          }}>
            {item}
            </Dropdown.Item>
          ))}
      </Dropdown.Menu>
    </Dropdown>


    <Dropdown bsPrefix={styles.dropdown}>
      <Dropdown.Toggle variant="success" id="dropdown-basic" className={styles['dropdown-button']}>
      Вегетреанское 
      </Dropdown.Toggle>

      <Dropdown.Menu className={styles['custom-dropdown']}>
      {veganItems.map((item, index) => (
          <Dropdown.Item key={index} className={styles['dropdown-items']} onClick={() => {
            getStatusNow(item);
          }}>
            {item}
            </Dropdown.Item>
          ))}
      </Dropdown.Menu>
    </Dropdown>
    </div>
  );
};

export default Filters;
/**
 *     <div className="accordion-item">
      <h2 className="accordion-header" id="headingOne">
        <button
          className={`${styles.accordion} accordion-button`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseOne"
          aria-expanded="false"
          aria-controls="collapseOne"
        >
          Основное 
        </button>
      </h2>
      <div
        id="collapseOne"
        className="accordion-collapse collapse"
        aria-labelledby="headingOne"
        data-bs-parent="#accordionExample"
      >
        <div className={`${styles.buttons} accordion-body d-flex flex-wrap gap-3`}> 
    
          {mainsItems.map((item, index) => (
            <FilterBottom
              key={index}
              index={index}
              name="status"
              input={item}

            />
          ))}
    
        </div>
      </div>
    </div>

    <div className="accordion-item">
      <h2 className="accordion-header" id="headingOne">
        <button
          className={`${styles.accordion} accordion-button`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsTwo"
          aria-expanded="false"
          aria-controls="collapsTwo"
        >
          Десерт
        </button>
      </h2>
      <div
        id="collapsTwo"
        className="accordion-collapse collapse"
        aria-labelledby="headingOne"
        data-bs-parent="#accordionExample"
      >
        <div className={`${styles.buttons} accordion-body d-flex flex-wrap gap-3`}>
    
          {dessertItems.map((item, index) => (
            <FilterBottom
              key={index}
              index={index}
              name="status"
              input={item}

            />
          ))}
    
        </div>
      </div>
    </div>

    <div className="accordion-item">
      <h2 className="accordion-header" id="headingOne">
        <button
          className={`${styles.accordion} accordion-button`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsTree"
          aria-expanded="false"
          aria-controls="collapsTree"
        >
         Вегетреанское
        </button>
      </h2>
      <div
        id="collapsTree"
        className="accordion-collapse collapse"
        aria-labelledby="headingOne"
        data-bs-parent="#accordionExample"
      >
        <div className={`${styles.buttons} accordion-body d-flex flex-wrap gap-3`}>
    
          {veganItems.map((item, index) => (
            <FilterBottom
              key={index}
              index={index}
              name="status"
              input={item}

            />
          ))}
    
        </div>
      </div>
    </div>
 */