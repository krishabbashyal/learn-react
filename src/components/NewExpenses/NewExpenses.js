import React from "react";
import "./NewExpenses.css";
import ExpenseForm from "./ExpenseForm";

const NewExpenses = (props) => {
  const onCompletionHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.giveData(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onCompletion={onCompletionHandler} />
    </div>
  );
};

export default NewExpenses;
