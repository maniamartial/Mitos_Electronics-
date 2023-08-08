import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// const Filter = ({ onFilterChange }) => {
//   const [selectedOption, setSelectedOption] = useState("none");

//   const handleOptionChange = (event) => {
//     const selectedValue = event.target.value;
//     setSelectedOption(selectedValue);
//     onFilterChange(selectedValue);
//   };

const Filter = ({ onFilterChange }) => {
  const [selectedOption, setSelectedoption] = useState("none");

  const handleOptionChange = (event) => {
    const selectedvalue = event.target.value;
    setSelectedoption(selectedvalue);
    onFilterChange(selectedvalue);
  };

  return (
    <div className="container mt-3">
      <div className="">
        <h5>Filter by Price:</h5>
        <select
          className="form-select"
          aria-label="Select filter option"
          value={selectedOption}
          onChange={handleOptionChange}
        >
          <option value="none">No Filter</option>
          <option value="lowToHigh">Low to High</option>
          <option value="highToLow">High to Low</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
