import { useState, useEffect } from "react";
import useMeals from "./useMeals";

const useIngredients=()=>{
    const {fetcheMeals}= useMeals()
    console.log(fetcheMeals)
    let [fetcheIngredients, setMeals] = useState([]);
    async function getApi() {
      const ingredients = [];
      let apiIngredients = 'strMeasure';
      let number = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'];
      const promises = number.map((letter) => {
        return (apiIngredients + letter);
      })
  
      promises.forEach((result) => {
        ingredients.push(result.data.meals);
        setMeals(ingredients)
      });
    }
    useEffect(() => {
      getApi();
    }, [])
console.log(fetcheIngredients)
    return {fetcheIngredients}
  }

  export default useIngredients;