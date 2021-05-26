// import ExpenseItem from "./components/ExpenseItem";
import Expenses from "./components/Expenses/Expenses";
import Card from "./components/UI/Card";
import "./components/Expenses/Expenses.css";
// import
function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

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
  return (
    <div>
      <h2>Let's get started SP!</h2>

      <Card className="expenses">
        <Expenses expenses={expenses} />
      </Card>
    </div>
  );
}

export default App;
