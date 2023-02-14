import React, {useState} from "react";
import Form from 'react-bootstrap/Form';
import styles from './styles.module.scss';
import DatePicker from "react-datepicker";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import goodBoking from '../../assets/Group 30.svg';
// import { useDispatch, useSelector } from 'react-redux';
// import { setData, setTime, setGuases } from "../../store/reducer/bookingSlice";
import { debounce } from 'lodash';

import "react-datepicker/dist/react-datepicker.css";
import img from '../../assets/unsplash_godkmdG6M6o.jpg';
import { NavLink } from "react-bootstrap";

const Booking = () => {
   const [show, setShow] = useState(false);
   const [startDate, setStartDate] = useState(new Date());
  //  console.log('startDate',startDate);
  //  const [stateName, setStateName]=useState('');
  //  console.log('stateName',stateName);
  //  const [statePassName, setStatePassName]=useState('');
  //  console.log('statePassName',statePassName);
  //  const [stateNumber, setStateNumber]=useState('');
  //  console.log('stateNumber',stateNumber);
  //  const [stateEmail, setStateEmail]=useState('');
  //  console.log('stateEmail',stateEmail);
  //  const [stateTime, setStateTime]=useState('');
  //  console.log('stateTime',stateTime);
  //  const [stateGuases, setStateGuases]=useState('');
  //  console.log('stateGuases',stateGuases);
   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);

  // const [guasesNumber, setGuasesNumber] = useState('');
  // const [timeNumber, settimeNumber] = useState('');

//   const dispatch = useDispatch();
// const featchBooking = () =>{
//   dispatch(setData(startDate));
//   dispatch(setTime(timeNumber));
//   dispatch(setGuases(guasesNumber));
// }
// const timeStore = useSelector((state) => state.booking.time);
// const guasesStore = useSelector((state) => state.booking.guases);
// const dataStore = useSelector((state) => state.booking.data);



//const handGuases = debounce((e) => setGuasesNumber(e.target.value), 500);


  const time = ['9:00', '9:30', '10:00','10:30','11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00','14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00','18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00' ];
  return (
<div className={styles.content}>
<img src={img} alt='' className={styles.img} />

<div className={styles.bookingContainer}>
<NavLink to='/' className={styles.title}>
    AYMLMENU
</NavLink>
<div className={styles.formContent}>
  <div className={styles.form}>
    <div className={styles.name}>
    <Form.Group>
    <Form.Control id="disabledTextInput" placeholder="Имя" /*onChange={(e)=>setStateName(e.target.value)}*/  className={styles.inputBooking} />
    </Form.Group>
    <Form.Group>
    <Form.Control id="disabledTextInput" placeholder="Фамилия" /*onChange={(e)=>setStatePassName(e.target.value)}*/  className={styles.inputBooking} />
    </Form.Group>
    </div>
    <div className={styles.name}>
    <Form.Group>
    <Form.Control id="disabledTextInput" /*onChange={(e)=>setStateNumber(e.target.value)}*/ placeholder="Номер телефона" className={styles.inputBooking} />
    </Form.Group>
    <Form.Group>
    <Form.Control id="disabledTextInput" placeholder="Электронная почта" /*onChange={(e)=>setStateEmail(e.target.value)}*/ className={styles.inputBooking} />
    </Form.Group>
    </div>
    <div className={styles.name}>
<Form.Group className="mb-3">
<DatePicker className={styles.inputBookingDate}  selected={startDate} onChange={(date) => setStartDate(date)} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Select className={styles.inputBooking}  /*onClick={(e)=> setStateTime(e.target.value)}*/>
          {
          time.map(e => (
          <option>{e}</option>
          ))
        }

        </Form.Select>
      </Form.Group>
      </div>
      <Form.Group className="mb-3">
      <Form.Control id="disabledTextInput" /*onChange={(e)=>setStateGuases(e.target.value)}*/ placeholder="Количество гостей" /*onChange={handGuases}*/ className={styles.inputBookingGuases} />
      </Form.Group>
      </div>
      <button className={styles.buttonBoking} onClick={handleShow} >Забронировать</button>
      </div>
      </div>

      <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >

      <Modal show={show} onHide={handleClose} >
        <div className={styles.book}>
        <img src={goodBoking} alt='' className={styles.goodBoking} />
        <div>
          <p className={styles.titleModal}>Столик успешно забронирован!</p>
          <p className={styles.textModal}>Ждем вас с нетерпением 12 февраля в 19:00 по адресу: г.Минск, ул. Карла Маркса,18</p>
          </div>
          <Button variant="secondary" onClick={handleClose} className={styles.buttonModal}>
            На главную
          </Button>
          </div>
      </Modal>
    </div>

</div>
  );


};


export default Booking;
