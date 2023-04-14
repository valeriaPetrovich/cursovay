import React, { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import styles from "./CardDetails.module.scss";
import Table from "react-bootstrap/Table";
import useFilter from "../../hoock/useFilter";
import Header from "../../components/Header";
import SearchTest from "../../components/SearchTest";
import vetka from "../../assets/Group 13.png";
import vetkaBottom from "../../assets/Group 14.png";
import icon from "../../assets/bx_food-menu.svg";
import iconRecept from "../../assets/Vector.svg";
import youtubeIcon from "../../assets/Vector (1).svg";
import vector from "../../assets/Vector 14.svg";
import useGoback from "../../hoock/useGoBack";
import Comments from "./Comments";




const CardDetails = () => {
  let { id } = useParams();  
  const { getdata } = useFilter();
  const { goBack } = useGoback(); 



  let display;
  display = getdata.map((el) => {
    if (el.idMeal === id) {
      console.log(el.strMeal)
      return (
        <div className={styles.contentDetalic}>
          <img src={vetka} alt="" className={styles.vetka1} />
          <Header>
            <button onClick={goBack} className={styles.buttonGoBack}>
              <img src={vector} alt="" className={styles.vector} />
              <img src={vector} alt="" className={styles.vector} />
            </button>
          </Header>
          <div className={`${styles["main-content"]}`}>
            <div
              className={`${styles["card-constainer"]} d-flex flex-column gap-5`}
            >
              <h1 className={styles["title-card"]}>{el.strMeal}</h1>
              <div className={styles.headerContent}>
                <div className={styles["image.container"]}>
                  <img
                    src={el.strMealThumb}
                    alt=""
                    className={styles.imgCard}
                  />
                </div>
                <div className="content">
                  <div className={styles.typeContent}>
                    <div className={styles.typeCatigories}>
                      <p className={styles.type}>Тип Блюда</p>
                      <p className={styles.typetext}>{el.strCategory}</p>
                    </div>
                    <div className={styles.typeCatigories}>
                      <p className={styles.type}>Страна Происхождения</p>
                      <p className={styles.typetext}>{el.strArea}</p>{" "}
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles["ingridients-conteiner"]}>
                <div className={styles["title-ingridient"]}>
                  <img src={icon} alt="" />
                  <h2>Ингридиенты</h2>
                </div>
                <Table className={styles.table}>
                  <tbody>
                    <tr className={styles.topTable}>
                      <th>Ингридиенты</th>
                      {Object.values(el)
                        .slice(9, 18)
                        .map((e) => {
                          return <td>{e}</td>;
                        })}
                    </tr>
                    <tr>
                      <th>Граммы</th>
                      {Object.values(el)
                        .slice(29, 38)
                        .map((e) => {
                          return <td>{e}</td>;
                        })}
                    </tr>
                  </tbody>
                </Table>
              </div>

              <div className={styles.footerContent}>
                <div className={styles.ingridients}>
                  <div className={styles["title-ingridient"]}>
                    <img src={iconRecept} alt="" />
                    <h2>Рецепт</h2>
                  </div>
                  <p className={styles.receptText}>{el.strInstructions}</p>
                </div>
                <a href={el.strYoutube} className={styles.linkContent}>
                  Вы также можете посмотреть обучающее видео
                  <br></br>
                  <img
                    src={youtubeIcon}
                    alt=""
                    className={styles.youtobeicon}
                  />
                </a>
              </div>
             <Comments name={el.strMeal}/>
            </div>
          </div>
          <img src={vetkaBottom} alt="" className={styles.vetka2} />
        </div>
      );
    }
  });
  return <>{display}</>;
};

export default CardDetails;
