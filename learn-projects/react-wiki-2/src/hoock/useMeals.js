import { useState, useEffect } from "react";
import axios from "axios";

const useMeals=()=>{
    let [fetcheMeals, setMeals] = useState([]);
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

    //const useElements= fetcheMeals.map((x) => x.map((el) => { return el.strMeal}));

    return {fetcheMeals}
  }

  export default useMeals;