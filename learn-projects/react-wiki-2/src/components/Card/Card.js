import React, { useState, useEffect } from "react";
import styles from "./Card.module.scss";
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import axios from "axios";



const Cards = ({ page }) => {
  ////////////////useMeals///////////////////////////
  let [fetcheMeals, setMeals] = useState([]);
  /////////////////getMeals/////////////////////////
  async function getApi() {
    const meals = [];
    let apiCoock = 'https://www.themealdb.com/api/json/v1/1/search.php?f=';
    let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'r', 's', 't', 'v', 'w', 'y'];
    const promises = letters.map((letter) => {
      return axios.get(apiCoock + letter);
    })

    const res = await Promise.all(promises);
    res.forEach((result) => {
      meals.push(result.data.meals);
      setMeals(meals)
    });
  }
  useEffect(() => {
    getApi();
  }, [])
  ///////////////////////////////////////////////////////


  let display;
  if (fetcheMeals) {
    //если ввели имя которое есть в списке api
    display = fetcheMeals.map((x) => x.map((el) => {
        return (
          <Link
            style={{ textDecoration: "none" }}
            to={`${page}${el.idMeal}`}
            key={el.idMeal}
            className="col-4 mb-4 position-relative text-dark"
          >
            <div className={styles.cards}>
              <img alt="" src={el.strMealThumb} className={`${styles.img} img-fluid`} />
              <div style={{ padding: "10px" }} className="content">
                <div className="ubuntu fs-4 fw-bold mb-4">{el.strMeal}</div>
              </div>
            </div>
            <div>{el.strCategory}</div>

          </Link>
        );
      })
    );
  } else {
    //иначе выводит фразу, что его нет
    display = "No Characters Found :/";
  }
  return <>{display}</>;
};
export default connect(
  state => ({
    testStore: state
  }),/*
  dispatch=>({
    onAddCaaracters: (CardName)=>{
      dispatch({type:"ADD_CARDS", payload: CardName})
    }
  }),*/
)(Cards);

