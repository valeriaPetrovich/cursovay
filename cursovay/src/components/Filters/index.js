import React from "react";
import styles from './styles.module.scss';
import FilterBottom from "./FilterBottom";

const Filters = () => {
  //let mainsItems = [  "Goat", "Lamb", "Miscellaneous", "Pasta",  "Seafood", "Side", "Starter", "Vegan", "Vegetarian"];
  const mainsItems = ["Beef", "Breakfast", "Chicken","Pork"]
  const dessertItems = ["Dessert"];
  const veganItems = ["Vegan", "Vegetarian"];
  return (
<div className={styles.buttonContainer}>
    <h2 className={styles.categories}>Categories</h2>
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingOne">
        <button
          className={`${styles.accordion} accordion-button`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseOne"
          aria-expanded="true"
          aria-controls="collapseOne"
        >
          Mains
        </button>
      </h2>
      <div
        id="collapseOne"
        className="accordion-collapse collapse show"
        aria-labelledby="headingOne"
        data-bs-parent="#accordionExample"
      >
        <div className={styles['buttons-container']}>
    
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
          aria-expanded="true"
          aria-controls="collapsTwo"
        >
          Dessert
        </button>
      </h2>
      <div
        id="collapsTwo"
        className="accordion-collapse collapse show"
        aria-labelledby="headingOne"
        data-bs-parent="#accordionExample"
      >
        <div className={styles['buttons-container']}>
    
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
          aria-expanded="true"
          aria-controls="collapsTree"
        >
          Green Menu
        </button>
      </h2>
      <div
        id="collapsTree"
        className="accordion-collapse collapse show"
        aria-labelledby="headingOne"
        data-bs-parent="#accordionExample"
      >
        <div className={styles['buttons-container']}>
    
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
    
    </div>
  );
};

export default Filters;
/**
 * <FilterBottom
              key={index}
              index={index}
              name="status"
              task={updateStatus}
              input={item}

            />

             <div className="accordion-body d-flex flex-wrap gap-3">
          {status.map((item, index) => (
           <div> 
            <button>Mains</button>
            <button>Dessert</button>
            <button>Green Menu</button>
            </div>
 */



            /**
             *     <div className="accordion-item">
      <h2 className="accordion-header" id="headingOne">
        <button
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseOne"
          aria-expanded="true"
          aria-controls="collapseOne"
        >
          Category
        </button>
      </h2>
      <div
        id="collapseOne"
        className="accordion-collapse collapse show"
        aria-labelledby="headingOne"
        data-bs-parent="#accordionExample"
      >
        <div className={styles['buttons-container']}>
           <div> 
            <button >Mains</button>
            <button >Dessert</button>
            <button >Green Menu</button>
            </div>
        </div>
      </div>
    </div>
             */