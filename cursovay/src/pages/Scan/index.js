import React from "react";
import BarcodeScannerComponent from "react-qr-barcode-scanner";
import { useDispatch } from "react-redux";
import {setBarcodeSlise} from '../../store/reducer/barcodeSlice';
import { useSelector } from "react-redux";
import Cards from "../../components/Card/Card";
import useBarcode from "../../hoock/useBarcode";

function Scan() {
  const [data, setData] = React.useState("Not Found");
const dispatch = useDispatch();
const {myFilt} = useBarcode();

dispatch(setBarcodeSlise(data));
const barcode = useSelector((state) => state.barcode.values);
console.log('barcode', barcode);

  return (
    <>
      <BarcodeScannerComponent
        width={500}
        height={500}
        onUpdate={(err, result) => {
          if (result) setData(result.text);
          else setData("Not Found");
        }}
      />
      <p>{data}</p>

      <div className={` col-8 mt-5`}>
          <div className="row">
            <Cards page="/" sliceResults={myFilt} />
          </div>
        </div>

    </>
  );
}

export default Scan;