import React from "react";
import useMeals from "../../hoock/useMeals";
import { useParams } from "react-router-dom";
import styles from '../../styles/CardDetails.module.scss';
import useIngredients from "../../hoock/useIngredients";

const CardDetails = () => {
  let { id } = useParams();
  const { fetcheMeals } = useMeals();
  const {} = useIngredients();
  let display;
  display = fetcheMeals.map((x) => x.map((el) => {
    if (el.idMeal === id) {
      return (
        <div className="container d-flex justify-content-center">
          <div className="d-flex flex-column gap-3">
            <h1 className={styles['title-card']}>{el.strMeal}</h1>
            <img src={el.strMealThumb} alt="" className={styles.imgCard} />

            <div className={styles['card-category']}>{el.strCategory}</div>
            <div className="content">
              <div className="">
                <span className={styles['curent-text']}>Сooking Кecipe <br></br></span>
                <span className={styles['tex-card']}>
                  {el.strInstructions}
                </span>

              </div>
              <div className="">
                <span className={styles['curent-text']}>A Dish From: </span>
                <span className={styles.area}>
                  {el.strArea}
                </span>
              </div>
              <div className="">
                <span className={styles['curent-text']}>Ingredients: </span>
                <span className={styles['tex-card']}> {el.strIngredient1}</span>
              </div>
              <div className="">
                <span className={styles['curent-text']}>
                  You can follow the link and watch the video: </span>
                <a href={el.strYoutube} className={styles.area}>
                  {el.strYoutube}
                </a>
              </div>
            </div>
          </div>
        </div>
      );
    }
  })
  );
  return <>{display}</>;

  /*
    return (
      <div className="container d-flex justify-content-center">
        <div className="d-flex flex-column gap-3">
          <h1 className="">{name}</h1>
          <img src={image} alt="" className="img-fluid" />
  
          {(() => {
            if (status === "Dead") {
              return <div className="badge bg-danger fs-5">{status} </div>;
            } else if (status === "Alive") {
              return <div className="badge bg-success fs-5">{status} </div>;
            } else if (status === "unknown") {
              return <div className="badge bg-secondary fs-5">{status}</div>;
            }
          })()}
          <div className="content">
            <div className="">
              <span className="">Gender:</span>
              {gender}
            </div>
            <div className="">
              <span className="">Location:</span>
              {location?.name}
            </div>
            <div className="">
              <span className="">Origin:</span>
              {origin?.name}
            </div>
            <div className="">
              <span className="">Species:</span>
              {species}
            </div>
          </div>
        </div>
      </div>
    );*/
};

export default CardDetails;
