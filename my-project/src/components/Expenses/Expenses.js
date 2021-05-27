import React, { useState } from "react";
import ExpenseList from "./ExpensesList";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpensesChart";
function Expenses(props) {
  const [enteredYear, setEnteredYear] = useState("2020");
  const filteredItems = props.expenses.filter(
    (val) => val.date.getFullYear().toString() === enteredYear
  );
  const addYearHandler = (changeYearData) => {
    setEnteredYear(changeYearData);
    // console.log("Year (In Expenses.js): " + enteredYear);
  };

  return (
    <div>
      <ExpenseFilter changeYearHandler={addYearHandler} />
      <ExpensesChart expenses={filteredItems} />
      <ul>
        <ExpenseList items={filteredItems} />
      </ul>
    </div>
  );
}
export default Expenses;
