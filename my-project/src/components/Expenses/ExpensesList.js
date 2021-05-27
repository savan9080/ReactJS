import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";
const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }
  return props.items.map((value, index) => {
    console.log(value.id);
    return (
      <li className="expenses-list" key={value.id}>
        <ExpenseItem
          title={value.title}
          amount={value.amount}
          date={value.date}
        ></ExpenseItem>
      </li>
    );
  });
};
export default ExpensesList;
