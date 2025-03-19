import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("All");
  const changeFilterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  let filteredExpenses = props.items.filter((expense) => {
    if (filteredYear === "All") {
      //console.log("All");
      return true;
    }
    return expense.date.getFullYear().toString() === filteredYear;
  });
  //const [filterContent, setFilterContent] = useState(filteredExpenses);
 /*  const deleteContentHandler = (deleteItem) => {
    //console.log(deleteItem); // Add the delete item and rerender logic here only.
   filteredExpenses = filteredExpenses.filter((expense) => {
      if (expense.id !== deleteItem.id) {
        return expense;
      }
    })
    //setFilterContent(filteredExpenses);
  };
  //console.log(filterContent) */
  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={changeFilterHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList
        expensesContent={filteredExpenses}
        //deleteContent={deleteContentHandler}
      />
    </Card>
  );
}

export default Expenses;
