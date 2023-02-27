import { useSelector } from "react-redux";
import { flatten } from 'lodash';
import { data } from "../constant/dataRu";


const useFilter = () => {
  const search = useSelector((state) => state.search.values);
  const status = useSelector((state)=> state.status.statusNow)
  const getdata = flatten(data.map((component) => component));

    const filtStatus = getdata.filter((e) => {
      if(status.length !==0){
        return e.strCategory === status;
      }
      else
      {
        return e.strMeal.toLowerCase().includes(search); 
      }
      
    })
  

  return { getdata, filtStatus }
}

export default useFilter;

// import { useSelector } from "react-redux";
// import { flatten } from 'lodash';
// import { data } from "../constant/dataRu";


// const useFilter = () => {
//   const search = useSelector((state) => state.search.values);
//   const getdata = flatten(data.map((component) => component));
//   const myFilt = getdata.filter((e) => {
//     return e.strMeal.toLowerCase().includes(search);                                      //////////.strMeal.toLowerCase().includes(search);
//   })

//   const filterStatus = (categore) => {
//     const filtStatus = getdata.filter((e) => {
//       return e.strCategory === categore;
//     })
//    console.log(filtStatus);
//   }

//   return { myFilt,getdata, filterStatus }
// }

// export default useFilter;