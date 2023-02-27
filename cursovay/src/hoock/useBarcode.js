import { useSelector } from "react-redux";
import { flatten } from 'lodash';
import { data } from "../constant/dataRu";


const useBarcode = () => {
    const barcode = useSelector((state) => state.barcode.values);
    const search = useSelector((state) => state.search.values);
  const getdata = flatten(data.map((component) => component));
  const myFilt = getdata.filter((e) => {
    if( barcode !== undefined){
    const constant = e.barcodeTest;
    const test = constant.find((el) => el === barcode); 
    return test;
    }
    else{
      return e.strMeal.toLowerCase().includes(search); 
    }
  })

  return { myFilt}
}

export default useBarcode;