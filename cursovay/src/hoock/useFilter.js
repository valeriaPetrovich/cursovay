import { useSelector } from "react-redux";
import { flatten } from 'lodash';
import {data} from '../constant/const';

const useFilter = () => {
  const search = useSelector((state) => state.search.values);
  //const status = useSelector((state) => state.status.values);
  //const results = useSelector((state) => state.results.values);
  //const getReportingIds = flatten(results.map((component) => component)); 

  const getdata = flatten(data.map((component) => component));

  const myFilt = getdata.filter((e) => {
   return e.strMeal.toLowerCase().includes(search);
  })
  
  /*const filtStatus = getstatus.filter((e) => {
    return e.strCategory==='Beef' 
    //status.includes('Beef')    
   })*/
  return { myFilt, getdata} 
}

export default useFilter;