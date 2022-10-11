import useMeals from "./useMeals";
import { useCaracters } from "./useCaracters";

const filterMeals = () => {
const {fetcheMeals} = useMeals();
const {search}=useCaracters();
const filterGroup = fetcheMeals.filter((e) => {
        return e.name.toLowerCase().includes(search);
});
return {filterGroup}

}

export default filterMeals;