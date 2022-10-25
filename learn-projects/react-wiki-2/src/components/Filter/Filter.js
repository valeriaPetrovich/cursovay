import React from "react"; //rafse Tab
import Status from "../Filter/Category/Status";

const Filter = ({
  updateStatus
}) => {
  ///обнуление
  let clear = () => {
    updateStatus("")
    window.location.reload(false);
  };
  return (
    <div className="col-lg-3 col-12 mb-5">
      <div className="text-center fw-bold fs-4 mb-2">Filters</div>
      <div
        style={{ cursor: "pointer" }}
        onClick={clear}
        className="text-primary text-decoration-underline text-center mb-3"
      >
        Clear Filters
      </div>
      <div className="accordion" id="accordionExample">
        <Status
          updateStatus={updateStatus}
        />
      </div>
    </div>
  );
};

export default Filter;
