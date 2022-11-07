import React from "react";
import style from "./styles.module.scss";

function Menu() {
  return (
    <nav className={style["menu-header"]}>
      <ul className="pt-4">
        
          <li className={style["menu-items"]}>
            <a href="#about" >
          About us
            </a>
          </li>
        
       
          <li className={style["menu-items"]}>
          <a href="#menu" >
            Menu
            </a>
          </li>
      
      
          <li className={style["menu-items"]}>
          <a href="#gallery" >
            Gallery
            </a>
          </li>
      
      </ul>
    </nav>
  );
}
export default Menu;
