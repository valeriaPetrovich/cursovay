import React from "react";
import { useParams } from "react-router-dom";
import styles from '../../styles/CardDetails.module.scss';
import Table from 'react-bootstrap/Table';
import useFilter from "../../hoock/useFilter";
import Header from '../../components/Header';
import SearchTest from '../../components/SearchTest';

const CardDetails = () => {
  let { id } = useParams();
  const {getdata} = useFilter();
  let display;
  display = getdata.map((el) =>  {
    if (el.idMeal === id) {
      return (
        <div className={styles.contentDetalic}>
          <Header/>
 <div className="container d-flex justify-content-center">
<SearchTest/>
          <div className="d-flex flex-column gap-3">
            <h1 className={styles['title-card']}>{el.strMeal}</h1>
            <img src={el.strMealThumb} alt="" className={styles.imgCard} />

            <div className={styles['card-category']}>{el.strCategory}</div>
            <div className="content">
              <div className="">
                <span className={styles['curent-text']}>Сooking Кecipe <br></br></span>
                <span className={styles['tex-card']}>
                  {el.strInstructions}
                </span>

              </div>
              <div className="">
                <span className={styles['curent-text']}>A Dish From: </span>
                <span className={styles.area}>
                  {el.strArea}
                </span>
              </div>
              <div className="">

                <Table className={styles.table}>
                  <tbody>
                    <tr>
                      <th>Ingredient</th>
                      {Object.values(el).slice(9, 18).map((e) => {
                        return (
                          <td>{e}</td>
                        )
                      })}
                    </tr>
                    <tr>
                      <th>Grams</th>
                      {Object.values(el).slice(29, 38).map((e) => {
                        return (
                          <td>{e}</td>
                        )
                      })}
                    </tr>
                  </tbody>
                </Table>
              </div>
              <div className="">
                <span className={styles['curent-text']}>
                  You can follow the link and watch the video: </span>
                <a href={el.strYoutube} className={styles.area}>
                  {el.strYoutube}
                  {el.strSource}
                </a>
              </div>
            </div>
          </div>
        </div>
        </div>
       
      );
    }
  });
  return <>{display}</>;
};

export default CardDetails;
