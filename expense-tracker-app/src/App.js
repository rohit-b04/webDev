import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    { id: "e1", title: "Notebooks", amount: 50.92, date: new Date() },
    { id: "e2", title: "Home accessories", amount: 1000, date: new Date() },
    { id: "e3", title: "Medicines", amount: 778.92, date: new Date() },
  ];
  return (
    <div className="App">
      <h2>This is React app.</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      > </ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      > </ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      > </ExpenseItem>
    </div>
  );
}

export default App;
