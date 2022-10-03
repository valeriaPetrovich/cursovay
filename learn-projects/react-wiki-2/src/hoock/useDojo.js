//import axios from "axios";
const useDojo=()=>{
    const axios = require("axios");
    const options = {
        method: 'GET',
        url: 'https://tasty.p.rapidapi.com/recipes/list',
        params: {from: '0', size: '20', tags: 'under_30_minutes'},
        headers: {
          'X-RapidAPI-Key': 'a6856f22e5mshf43c0243fad4b79p17bc18jsn1b60ae277406',
          'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
        }
      };
      
      axios.request(options).then(function (response) {
          console.log(response.data);
      }).catch(function (error) {
          console.error(error);
      });
      
      return {options};
  }

  export default useDojo;