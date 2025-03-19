import React, { useState } from "react";
import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  //const [filterContent, setFilterContent] = useState(props.expensesContent);
  /* const onClickDeleteHandler = (deleteItem) => {
    props.deleteContent(deleteItem);
  }; */

  if (props.expensesContent.length === 0) {
    return <h2 className="expenses-list__fallback">No Expenses Found</h2>;
  }
  return (
    <div>
      <ul className="expenses-list">
        {props.expensesContent.map((expense) => (
          <ExpenseItem
            id={expense.id}
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            //onClickDelete={onClickDeleteHandler}
          />
        ))}
      </ul>
    </div>
  );
};

export default ExpensesList;
