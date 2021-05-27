// import ExpenseItem from "./components/ExpenseItem";
import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import Card from "./components/UI/Card";
import "./components/Expenses/Expenses.css";

const App = () => {
  const Initial_Expenses = [
    {
      id: 0,
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 1, title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 2,
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 3,
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const [expenses, setExpenses] = useState(Initial_Expenses);

  // const expenseList = expenses.map((value, index) => {
  //   return (
  //     <ExpenseItem
  //       title={value.title}
  //       amount={value.amount}
  //       date={value.date}
  //     ></ExpenseItem>
  //   );
  // });
  // console.log(expenseList);

  const addExpenseHandler = (newExpenseData) => {
    // console.log("In App.js");
    // console.log(expenses);

    setExpenses((prevExpenses) => {
      newExpenseData.id = prevExpenses.length;
      return [newExpenseData, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />

      <Card className="expenses">
        <Expenses expenses={expenses} />
      </Card>
    </div>
  );
};

export default App;
