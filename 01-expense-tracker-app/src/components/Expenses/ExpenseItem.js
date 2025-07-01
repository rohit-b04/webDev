import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import React, { useState } from "react";

function ExpenseItem(props) {

  /* const eventClickHandler = () => {
    props.onClickDelete(props);
  } */

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />

        <div className="expense-item__description">
          <h2>{props.title}</h2>
        </div>
        <div className="expense-item__price">Rs.{props.amount}</div>
        {/* <div className = ""><button  onClick={eventClickHandler}>Delete Item </button></div> */}
      </Card>
    </li>
  );
}

export default ExpenseItem;
