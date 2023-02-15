import React from "react";
import styles from './styles.module.scss';
import imgMaim from '../../../assets/undraw_special_event_-4-aj8 (6) 1.png'
import { NavLink } from 'react-router-dom';

const MainFirstContainer = () => {
  return (
    // <div className={styles.firstContainer}>
    //       <div className={styles.leftContent}>
    //         <h2 className={`${styles['title']}`}>Вкусно то, что вы заслуживаете!</h2>
    //         <NavLink to="/scan" className={styles.button}>
    //           Сканировать 
    //         </NavLink>
    //       </div>
    //         <img src={imgMaim} atl="imgMain" className={styles.img} />
    // </div>
    <div className="container" id='about'>
      <div className={`${styles['content']} mt-5`}>
        <div className="row">
          <div className="col-md-5">
            <h2 className={`${styles['title']}`}>Вкусно то, что вы заслуживаете!</h2>
            <NavLink to="/scan" className={styles.button}>
              Сканировать 
            </NavLink>
          </div>

          <div className="col-md-5 col-md-offset-4">
            <img src={imgMaim} atl="imgMain" className={styles.img} />
          </div>
        </div>
      </div>
    </div>
  );


};


export default MainFirstContainer;