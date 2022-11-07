import React, {useState} from "react";
import Form from 'react-bootstrap/Form';
import styles from './styles.module.scss';
import DatePicker from "react-datepicker";
import { useDispatch, useSelector } from 'react-redux';
import { setData, setTime, setGuases } from "../../store/reducer/bookingSlice";
import { debounce } from 'lodash';

import "react-datepicker/dist/react-datepicker.css";

const Booking = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [guasesNumber, setGuasesNumber] = useState('');
  const [timeNumber, settimeNumber] = useState('');

  const dispatch = useDispatch();
const featchBooking = () =>{
  dispatch(setData(startDate));
  dispatch(setTime(timeNumber));
  dispatch(setGuases(guasesNumber));
}
const timeStore = useSelector((state) => state.booking.time);
const guasesStore = useSelector((state) => state.booking.guases);
const dataStore = useSelector((state) => state.booking.data);

console.log(guasesStore, timeStore, dataStore)

const handGuases = debounce((e) => setGuasesNumber(e.target.value), 500);


  const time = ['9:00', '9:30', '10:00','10:30','11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00','14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00','18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00' ];
  return (
<div className="container">
<div className={styles.title}>
  <h1>  Welcome  </h1>
</div>

  <div className={styles.form}>
<Form.Group className="mb-3">
<DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
      </Form.Group>
      <Form.Group className="mb-3">
        
        <Form.Select onClick={(e)=> settimeNumber(e.target.value)}>
          {
          time.map(e => (
          <option>{e}</option>
          ))
        }

        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3">
      <Form.Control id="disabledTextInput" placeholder="Guest" onChange={handGuases} />
      </Form.Group>
      <Form.Group className="mb-3">

       <button onClick={()=> featchBooking()}>Book now</button>
      </Form.Group>
      </div>
</div>
  );


};


export default Booking;
