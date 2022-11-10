import React from "react";
import styles from './styles.module.scss';
import useFilter from "../../hoock/useFilter";

const FilterBottom = ({ input, task, index, name }) => {
  const {filterStatus} = useFilter();
  return (
    <div>
      <style>
        {`
          input[type="radio"] {
            display: none;
          }
        `}
      </style>

      <div className="form-check">
        <input
          className="form-check-input x"
          type="radio"
          name={name}
          id={`${name}-${index}`}
        />
        <label
          onClick={() => {
            filterStatus(input);
          }}
         className={`${styles.bt} btn btn-outline-primary`}
          htmlFor={`${name}-${index}`}
        >
          {input}
        </label>
      </div>
    </div>
  );
};

export default FilterBottom;
