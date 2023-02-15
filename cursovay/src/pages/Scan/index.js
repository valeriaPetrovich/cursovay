import React, {useState} from "react";
import BarcodeScannerComponent from "react-qr-barcode-scanner";
import { useDispatch } from "react-redux";
import {setBarcodeSlise} from '../../store/reducer/barcodeSlice';
import { useSelector } from "react-redux";
import Cards from "../../components/Card/Card";
import useBarcode from "../../hoock/useBarcode";
import Header from '../../components/Header';
import styles from './styles.module.scss';
import { NavLink } from "react-router-dom";
import Pagination from "../../components/Pagination/Pagination";

function Scan() {
const [data, setData] = React.useState();
const dispatch = useDispatch();
const {myFilt} = useBarcode();
dispatch(setBarcodeSlise(data));
const [currentPage, setCurrentPage] = useState(1);
const LIMIT = 12;
let sliceResults = myFilt.slice(LIMIT * (currentPage - 1), currentPage * LIMIT);
const total = 240;
  return (
    <div>
    <Header>
      <div className={styles.buttonContent}>
        <NavLink to='/'> <button className={styles.button}>Главная</button></NavLink>
        <NavLink to='/main'> <button className={styles.button}>Меню</button></NavLink>
      </div>
    </Header>
    <div className={styles.barcodeComponents}>
    <BarcodeScannerComponent
        width={500}
        height={500}
        onUpdate={(err, result) => {
          if (result) setData(result.text);
        }}
        style={{ width: '100%' }}
      />
            </div>
      <div className={styles.cards}>
      <div className={` col-10`} >
          <div className="row">
            <Cards page="/" sliceResults={sliceResults} />
          </div>
        </div>
        <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} total={total} />
        </div>

    </div>
  );
}

export default Scan;