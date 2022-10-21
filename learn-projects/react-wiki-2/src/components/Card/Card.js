import styles from "./Card.module.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import useMeals from "../../hoock/useMeals";
/*
import { useSelector } from "react-redux";
const search = useSelector((state) => state.search.values);
const filter = fetcheMeals.map((e)=>{
  e.filter((el)=>{
	return el.strMeal.includes(search);
  })
})*/


const Cards = ({sliceResults}) => {

	const {} = useMeals();
	//const results = useSelector((state) => state.results.values);

   let display = sliceResults.map((x) => x.map((el) => {
 
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
  return <>{display}</>;
};
export default Cards;