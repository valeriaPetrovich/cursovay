import React from "react";
import styles from './styles.module.scss';
import img1 from '../../../assets/unsplash_N_Y88TWmGwA.png'
import img2 from '../../../assets/unsplash_r4mc-NvsFuU.png'
import img3 from '../../../assets/unsplash_nQWT-aeqVMQ.png'
import img4 from '../../../assets/image 1.png'

const MainThirdContainer = () => {
  return (
    <div className={`${styles['content']} mt-5`} id='gallery'>
        <h2 className={`${styles['title']} text-center `} >Галерея </h2>
        <div className={styles.images}>
        <img src={img3} alt='img3' className={styles.img1}/>
        <img src={img2} alt='img2' className={styles.img2}/>
        <img src={img1} alt='img1' className={styles.img3}/>
        <img src={img4} alt='img4' className={styles.img4}/>
        </div>
        <h2 className={`${styles['title-AYML']}`} >AYMLMENU </h2>
    </div>


  );


};
//<h2 className={`${styles['title']} rigth`} >AYMLMENU </h2>

export default MainThirdContainer;