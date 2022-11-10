import Carousel from 'react-bootstrap/Carousel';
import bestMeals from '../../../../assets/Rectangle 4.png'
import styles from './styles.module.scss';
import { NavLink } from 'react-router-dom';


function IndividualIntervalsExample() {

  return (
    <div id='menu'>
      <Carousel controls={false} indicators={false} className={`${styles['img']} pt-5`} >
      <Carousel.Item interval={4000}>
        <div>
        <img src={bestMeals} alt='bestMeals' className={styles.imgSlider}/>
      <NavLink to='/main' className={styles.open}>Открыть меню</NavLink>
        </div>
      
      </Carousel.Item>
      <Carousel.Item interval={4000}>
      <div>
        <img src={bestMeals} alt='bestMeals' className={styles.imgSlider}/>
      <NavLink to='/main' className={styles.open}>Open menu</NavLink>
        </div>
      </Carousel.Item>
      <Carousel.Item interval={4000}>
      <div>
        <img src={bestMeals} alt='bestMeals' className={styles.imgSlider}/>
      <NavLink to='/main' className={styles.open}>Open menu</NavLink>
        </div>
      </Carousel.Item>
    </Carousel>
    </div>
    
  );
}

export default IndividualIntervalsExample;