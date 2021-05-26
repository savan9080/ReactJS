import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
function ExpenseItem({ title, amount, date }) {
  const clickHandler = () => {
    console.log("Button Clicked...");
  };

  return (
    <div className="expense-item">
      <ExpenseDate mydate={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">₹{amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </div>
  );
}

export default ExpenseItem;
