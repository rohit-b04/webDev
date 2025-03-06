import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  /* const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState(""); */

  const [userInputs, setUserInputs] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  const titleChangeHandler = (event) => {
    /* setUserInputs({
      ...userInputs,
      enteredTitle: event.target.value,
    }); */
    setUserInputs((prevState) => {
      return { ...prevState, enteredTitle: event.target.value };
    });
  };
  const amountChangeHandler = (event) => {
    /* setUserInputs({
      ...userInputs,
      enteredAmount: event.target.value,
    }); */
    setUserInputs((prevState) => {
      return { ...prevState, enteredAmount: event.target.value };
    });
  };
  const dateChangeHandler = (event) => {
    /* setUserInputs({
      ...userInputs,
      enteredDate: event.target.value,
    }); */
    setUserInputs((prevState) => {
      return { ...prevState, enteredDate: event.target.value };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: userInputs.enteredTitle,
      amount: userInputs.enteredAmount,
      date: new Date(userInputs.enteredDate),
    };
    props.onSaveExpenseData(expenseData); 
    setUserInputs(() => {
      return {
        enteredTitle: "",
        enteredAmount: "",
        enteredDate: "",
      };
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={userInputs.enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={userInputs.enteredAmount}
            onChange={amountChangeHandler}
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={userInputs.enteredDate}
            onChange={dateChangeHandler}
            min="2024-01-01"
            max="2025-12-31"
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
