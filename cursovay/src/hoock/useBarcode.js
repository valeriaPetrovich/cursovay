import { useSelector } from "react-redux";
import { flatten } from 'lodash';
import { data } from "../constant/dataRu";


const useBarcode = () => {
    const barcode = useSelector((state) => state.barcode.values);
    const search = useSelector((state) => state.search.values);
    console.log('barcode', barcode);
  const getdata = flatten(data.map((component) => component));
  const myFilt = getdata.filter((e) => {
    if( barcode !== undefined){
      return e.barcode === barcode; 
    }
    else{
      return e.strMeal.toLowerCase().includes(search); 
    }
  })

  return { myFilt}
}

export default useBarcode;