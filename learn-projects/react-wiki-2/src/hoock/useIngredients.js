
import useMeals from "./useMeals";

const useIngredients=()=>{
  const {fetcheMeals} =useMeals();
  const number = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'];
  //const ingredients = [];
  let apiIngredients = 'strMeasure';
  const prom = number.map((letter) => {
    return (apiIngredients + letter);
  })

  const newArr=prom.forEach((result) => {
    //ingredients.push(result);
    console.log(result);
    const ingred = fetcheMeals.forEach((e)=>{e.forEach((m)=>{
      console.log(m);
    })})
    console.log(ingred); 
  });
  console.log(newArr);
  return { }
    }


  export default useIngredients;