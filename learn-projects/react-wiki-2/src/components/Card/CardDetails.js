import React from "react";
import useMeals from "../../hoock/useMeals";
import { useParams } from "react-router-dom";
import styles from '../../styles/CardDetails.module.scss';
import TableIngredients from "../Table";

const CardDetails = () => {
  let { id } = useParams();
  const { fetcheMeals } = useMeals();
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
                <span className={styles['tex-card']}> {Object.values(el).slice(9,18)}</span>
                <TableIngredients/>
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
};

export default CardDetails;
