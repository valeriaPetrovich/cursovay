import React from "react";
import styles from './styles.module.scss';
import imgMaim from '../../../assets/undraw_special_event_-4-aj8 (6) 1.png'
import { NavLink } from 'react-router-dom';

const MainFirstContainer = () => {
  return (
<div className="container" id='about'>
    <div className={`${styles['content']} mt-5`}>
   <h2 className={`${styles['title']}`}>Delicious is what you deserve!</h2> 
   <img src={imgMaim} atl="imgMain" className={styles.img}/>
   <NavLink to="/booking" className={styles.button}>
   Reserve a table
</NavLink>
    </div>

</div>
  );


};


export default MainFirstContainer;