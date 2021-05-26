import ExpenseItem from "./ExpenseItem";
import React, { useState } from "react";

import ExpenseFilter from "./ExpenseFilter";
function Expenses(props) {
  const [enteredYear, setEnteredYear] = useState("2020");
  // const filteredItems = props.expenses.filter(
  //   (val) => val.date.getFullYear().toString() === enteredYear
  // );

  const sp = props.expenses.map((value, index) => {
    return (
      <ExpenseItem
        title={value.title}
        amount={value.amount}
        date={value.date}
        key={index}
      ></ExpenseItem>
    );
  });

  const addYearHandler = (changeYearData) => {
    setEnteredYear(changeYearData);
    console.log("Year (In Expenses.js): " + enteredYear);
  };

  return (
    <div>
      <ExpenseFilter changeYearHandler={addYearHandler} />
      {sp}
    </div>
  );
}
export default Expenses;
