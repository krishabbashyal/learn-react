import React from "react";
import "./NewExpenses.css";
import ExpenseForm from "./ExpenseForm";

const NewExpenses = () => {
  const onCompletionHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    console.log(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onCompletion={onCompletionHandler} />
    </div>
  );
};

export default NewExpenses;
