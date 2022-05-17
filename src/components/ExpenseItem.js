import "./ExpenseItem.css";

function ExpenseItem() {
  const expenseDate = new Date(2020, 6, 5);
  const expenseTitle = "6800XT Graphics Card";
  const expensePrice = 767.34;

  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expensePrice}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
