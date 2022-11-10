import React from "react";
import styles from './styles.module.scss';
import IndividualIntervalsExample from "./Slider";

const MainSecondContainer = () => {
  return (
    <div className={`${styles['content']} mt-5`}>
   <h2 className={`${styles['title']} text-center pt-5`} >Наше лучшее предложение меню</h2>
   <div className={styles.slider}>
   <IndividualIntervalsExample/>

   </div>
   
    </div>
  );


};


export default MainSecondContainer;