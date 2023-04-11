import React from "react";
import styles from './styles.module.scss';
import Menu from "../Menu";
import buttonIcon from '../../assets/Rectangle 2.svg'
import { NavLink } from 'react-router-dom';


const Header = ({children}) => {
  return (
<div className={styles.header}> 
{children}
<NavLink style={{textDecoration:'none'}} to='/'><h2 className={`${styles['title']}  pt-3`}>AYMLMENU</h2></NavLink>
<NavLink to='/booking' className={`${styles['reservbutton']}  pt-3`} >
<img src={buttonIcon} alt='button'/>
Оставить комментарий
</NavLink>

</div>

  );


};


export default Header;