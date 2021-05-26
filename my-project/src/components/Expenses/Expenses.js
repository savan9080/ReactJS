import ExpenseItem from "./ExpenseItem";
function Expenses(props) {
  return props.expenses.map((value, index) => {
    return (
      <ExpenseItem
        title={value.title}
        amount={value.amount}
        date={value.date}
      ></ExpenseItem>
    );
  });
}
export default Expenses;
