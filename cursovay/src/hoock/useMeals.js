//import axios from "axios";
//import { useDispatch } from 'react-redux';
//import { setResults } from '../store/reducer/resultsSlice';


const useMeals = async () => {
  //const dispatch = useDispatch();
   // const meals = [];
    //let apiCoock = 'https://www.themealdb.com/api/json/v1/1/search.php?f=';
    const url = 'http://localhost:8080/api/json/v1/1/search.php'
  
    
    const data = await fetch(url, { mode: 'no-cors'}).then((blob) => blob.json)
    console.log(data)

    //const data = await response.json();
    //console.log(data);

    /*
    let data = await fetch(url).then((res) => res.json());
    console.log('data',data);*/

    /*let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'r', 's', 't', 'v', 'w', 'y'];
    const promises = letters.map((letter) => {
      return axios.get(apiCoock + letter);
    })

    const res = await Promise.all(promises);
    res.forEach((result) => {
      meals.push(result.data.meals);
      dispatch(setResults(meals));
    });*/
}

export default useMeals;