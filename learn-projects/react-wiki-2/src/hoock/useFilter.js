import { useSelector } from "react-redux";
import { flatten } from 'lodash';

const useFilter = () => {
  const search = useSelector((state) => state.search.values);
  const results = useSelector((state) => state.results.values);
  const getReportingIds = flatten(results.map((component) => component));
  const myFilt = getReportingIds.filter((e) => {
   return e.strMeal.includes(search);
  })
  console.log(myFilt);
  return { myFilt } 
}

export default useFilter;

  /*
const {fetcheMeals} = useMeals();
const {search} = useCaracters();
console.log(search)
    const filterMeals = fetcheMeals.map((v) => {
      v.filter((e)=>{
        return e.strMeal === search ;
      })
    })
*/