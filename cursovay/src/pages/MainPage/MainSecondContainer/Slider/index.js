import Carousel from 'react-bootstrap/Carousel';
import bestMeals from '../../../../assets/Rectangle 4.png'
import bestMeals1 from '../../../../assets/2023-02-12 13.05.35.jpg';
import bestMeals2 from '../../../../assets/2023-02-12 13.05.41.jpg'; 
import styles from './styles.module.scss';
import { NavLink } from 'react-router-dom';


function IndividualIntervalsExample() {

  return (
    <div id='menu'>
      <Carousel controls={false} indicators={false} className={`${styles['img']} pt-5`}>
      <Carousel.Item interval={4000}>
        <div>
        <img src={bestMeals} alt='bestMeals' className={styles.imgSlider}/>
      <NavLink to='/main' className={styles.open}>Открыть меню</NavLink>
        </div>
      
      </Carousel.Item>
      <Carousel.Item interval={4000}>
      <div>
        <img src={bestMeals1} style={{width:'100%', borderRadius:'10px'}} alt='bestMeals' className={styles.imgSlider}/>
      <NavLink to='/main' className={styles.open}>Открыть меню</NavLink>
        </div>
      </Carousel.Item>
      <Carousel.Item interval={4000}>
      <div>
        <img src={bestMeals2} style={{width:'100%', borderRadius:'10px'}} alt='bestMeals' className={styles.imgSlider}/>
      <NavLink to='/main' className={styles.open}>Открыть меню</NavLink>
        </div>
      </Carousel.Item>
    </Carousel>
    </div>
    
  );
}

export default IndividualIntervalsExample;