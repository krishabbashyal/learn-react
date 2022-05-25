import React, { useState } from "react";
import "./NewExpenses.css";
import ExpenseForm from "./ExpenseForm";

const NewExpenses = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const onCompletionHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.giveData(expenseData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  if (!isEditing) {
    return (
      <div className="new-expense">
        <button onClick={startEditingHandler}>Add New Expense</button>
      </div>
    );
  }

  if (isEditing) {
    return (
      <div className="new-expense">
        <ExpenseForm
          onCompletion={onCompletionHandler}
          endEditing={stopEditingHandler}
        />
      </div>
    );
  }
};

export default NewExpenses;
