function ExpenseDate(props) {
  let month = props.mydate.toLocaleString("en-US", { month: "long" });
  let day = props.mydate.toLocaleString("en-US", { day: "2-digit" });
  let year = props.mydate.getFullYear();
  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__day">{day}</div>
      <div className="expense-date__year">{year}</div>
    </div>
  );
}

export default ExpenseDate;