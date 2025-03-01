import Expenses from "./components/Expenses/Expenses";
import React from "react";

function App() {
  /* return React.createElement(
    "div",
    {},
    React.createElement(Expenses, { items: expenses })
  ); */
  const expenses = [
    { id: "e1", title: "Notebooks", amount: 50.92, date: new Date() },
    { id: "e2", title: "Home accessories", amount: 1000, date: new Date() },
    { id: "e3", title: "Medicines", amount: 778.92, date: new Date() },
  ];
  return (
    <div>
      <h2>Let's get started</h2>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
