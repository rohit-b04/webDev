import React from "react";
import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  let contentRender = <p>No Expenses Found</p>;
  if (props.expensesContent.length === 0) {
    return <h2 className="expenses-list__fallback">No Expenses Found</h2>;
  }
  return (
    <div>
      <ul className="expenses-list">
        {props.expensesContent.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </ul>
    </div>
  );
};

export default ExpensesList;
