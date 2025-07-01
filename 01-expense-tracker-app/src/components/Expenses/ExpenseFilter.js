import React, { useState } from "react";
import "./ExpenseFilter.css";

function ExpenseFilter(props) {
  const optionChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
    //console.log(event.target.value);
    //console.log(props.selected.filteredYear);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by Year</label>
        <select
          value={props.selected.filteredYear}
          onChange={optionChangeHandler}
        >
          <option value="All">All</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
          <option value="2025">2025</option>
        </select>
      </div>
    </div>
  );
}

export default ExpenseFilter;
