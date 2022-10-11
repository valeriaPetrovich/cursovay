import styles from "./Card.module.scss";
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import useMeals from "../../hoock/useMeals";

const Cards = () => {
  const {fetcheMeals} = useMeals();
  let display;
  if (fetcheMeals) {
    //если ввели имя которое есть в списке api
    display = fetcheMeals.map((x) => x.map((el) => {
 
      return (
        <Link
          style={{ textDecoration: "none" }}
          to={`${el.idMeal}`}
          key={el.idMeal}
          className="col-4 mb-4 position-relative text-dark"
        >
          <div className={styles.cards}>
            <img alt="" src={el.strMealThumb} className={`${styles.img} img-fluid`} />
            <div style={{ padding: "10px" }} className="content">
              <div className={styles['text-catd']}>{el.strMeal}</div>
            </div>
          </div>
          <div
            className={`${styles.badge} position-absolute badge bg-light text-dark`}
          >
            {el.strCategory}{" "}
          </div>
        </Link>
      );
    })
    );
  } else {
    //иначе выводит фразу, что его нет
    display = "No Meals Found";
  }
  return <>{display}</>;
};
export default connect(
  state => ({
    testStore: state
  }),
)(Cards);