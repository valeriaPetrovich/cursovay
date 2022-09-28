import React from "react";
import useMeals from "../../hoock/useMeals";
import { useParams } from "react-router-dom";
const CardDetails = () => {
  let { id } = useParams();
  const { fetcheMeals} = useMeals();
  let display;
  display = fetcheMeals.map((x) => x.map((el) => {
    if(el.idMeal === id){
    return (
      <div className="container d-flex justify-content-center">
        <div className="d-flex flex-column gap-3">
          <h1 className="">{el.strMeal}</h1>
          <img src={el.strMealThumb} alt="" className="img-fluid" />

          <div className="badge bg-danger fs-5">{el.strCategory}</div>;
          <div className="content">
            <div className="">
              <span className="">Сooking Кecipe</span>
              {el.strInstructions}
            </div>
            <div className="">
              <span className="">A Dish From</span>
              {el.strArea}
            </div>
            <div className="">
              <span className="">Ingredients:</span>
              {el.strIngredient1}
            </div>
            <div className="">
              <span className="">
                You can follow the link and watch the video:</span>
              {el.strYoutube}
            </div>
          </div>
        </div>
      </div>
    );}
  })
  );
  return <>{display}</>;

  /*
    return (
      <div className="container d-flex justify-content-center">
        <div className="d-flex flex-column gap-3">
          <h1 className="">{name}</h1>
          <img src={image} alt="" className="img-fluid" />
  
          {(() => {
            if (status === "Dead") {
              return <div className="badge bg-danger fs-5">{status} </div>;
            } else if (status === "Alive") {
              return <div className="badge bg-success fs-5">{status} </div>;
            } else if (status === "unknown") {
              return <div className="badge bg-secondary fs-5">{status}</div>;
            }
          })()}
          <div className="content">
            <div className="">
              <span className="">Gender:</span>
              {gender}
            </div>
            <div className="">
              <span className="">Location:</span>
              {location?.name}
            </div>
            <div className="">
              <span className="">Origin:</span>
              {origin?.name}
            </div>
            <div className="">
              <span className="">Species:</span>
              {species}
            </div>
          </div>
        </div>
      </div>
    );*/
};

export default CardDetails;
