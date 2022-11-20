import { useSelector } from "react-redux";
import { flatten } from 'lodash';
import { data } from "../constant/dataRu";


const useBarcode = () => {
    const barcode = useSelector((state) => state.barcode.values);
    console.log('barcode', barcode);
  const getdata = flatten(data.map((component) => component));
  const myFilt = getdata.filter((e) => {
    return e.barcode2 === barcode;                                      //////////.strMeal.toLowerCase().includes(search);
  })


  return { myFilt,getdata }
}

export default useBarcode;