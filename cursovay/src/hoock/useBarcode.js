import { useSelector } from "react-redux";
import { flatten } from 'lodash';
import { data } from "../constant/dataRu";


const useBarcode = () => {
    const barcode = useSelector((state) => state.barcode.values);
    const search = useSelector((state) => state.search.values);
  const getdata = flatten(data.map((component) => component));
  const myFilt = getdata.filter((e) => {
    //console.log(alligator.find(el => el.length < 12)); 
    if( barcode !== undefined){
    //   const barcodeTest = '4870004200555';
    //   const constatnt = e.barcodeTest
    //   const test = constatnt.find((el) => el === barcodeTest); 
    //   console.log(test)
    //  return test;
    const constant = e.barcodeTest;
    const test = constant.find((el) => el === barcode); 
    return test;
      // return e.barcode === barcode;
    }
    else{
      return e.strMeal.toLowerCase().includes(search); 
    }
  })

  return { myFilt}
}

export default useBarcode;