
const useMeals = () => {

    const url = 'http://localhost:8000/api/json/v1/1/search.php'
    const meals = fetch(url).then((result)=>result.json());
    console.log(meals);
   /* const response = await fetch(url);
    const meals = await response.json();
    return { meals };*/
  }


export default  useMeals;

/*
const useMeals = async () => {
  //const dispatch = useDispatch();
   // const meals = [];
    //let apiCoock = 'https://www.themealdb.com/api/json/v1/1/search.php?f=';

    /*let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'r', 's', 't', 'v', 'w', 'y'];
    const promises = letters.map((letter) => {
      return axios.get(apiCoock + letter);
    })

    const res = await Promise.all(promises);
    res.forEach((result) => {
      meals.push(result.data.meals);
      dispatch(setResults(meals));
    });
}*/