import useMeals from "./useMeals";
import useCaracters from "./useCaracters";

const useFilter = () => {
const {fetcheMeals} = useMeals();
const {search} = useCaracters();
console.log(search)
    const filterMeals = fetcheMeals.map((v) => {
      v.filter((e)=>{
        return e.strMeal === search ;
      })
    })

  return { filterMeals} 
}

export default useFilter;