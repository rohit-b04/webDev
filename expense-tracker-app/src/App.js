import Expenses from "./components/Expenses/Expenses";
import React, { useState } from "react";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  { id: "e1", title: "Notebooks", amount: 50.92, date: new Date("2024") },
  {
    id: "e2",
    title: "Home accessories",
    amount: 1000,
    date: new Date("2024"),
  },
  { id: "e3", title: "Medicines", amount: 778.92, date: new Date("2024") },
  { id: "e4", title: "books", amount: 235, date: new Date("2025") },
  { id: "e5", title: "Telivision", amount: 25000, date: new Date("2023") },
];

function App() {
  /* return React.createElement(
    "div",
    {},
    React.createElement(Expenses, { items: expenses })
  ); */
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
