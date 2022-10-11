import useMeals from "./useMeals";
import useCaracters from "./useCaracters";

const useFilter = () => {
const {fetcheMeals} = useMeals();
const {search} = useCaracters()
console.log(search)
    const filterMeals = fetcheMeals.map((x)=>x.filter((e)=>{
        return e.strMeals === 'Apple Frangipan Tart';
    }))

  return { filterMeals} 
}

export default useFilter;