import React, {useEffect} from "react";
import FilterBTN from "../FilterBTN";
import { useDispatch} from 'react-redux';
import { setStatusSlise } from "../../../store/reducer/statusSlice";

const Status = ({ updateStatus }) => {
  let status = ["Beef", "Breakfast", "Chicken", "Dessert", "Goat", "Lamb", "Miscellaneous", "Pasta", "Pork", "Seafood", "Side", "Starter", "Vegan", "Vegetarian"];
  const dispatch = useDispatch();
  const fetchStatus = () => {
	dispatch(setStatusSlise(status));
};
useEffect(()=>{
  fetchStatus();
})

  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingOne">
        <button
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseOne"
          aria-expanded="true"
          aria-controls="collapseOne"
        >
          Category
        </button>
      </h2>
      <div
        id="collapseOne"
        className="accordion-collapse collapse show"
        aria-labelledby="headingOne"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body d-flex flex-wrap gap-3">
          {status.map((item, index) => (
            <FilterBTN
              key={index}
              index={index}
              name="status"
              task={updateStatus}
              input={item}

            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Status;
