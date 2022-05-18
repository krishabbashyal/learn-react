import React from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" />
        </div>
        <div className="new-expense__control">
          <label>Price</label>
          <input type="number" min="0.00" step="0.01" />
        </div>
        <div className="new-expense__control">
          <label>Price</label>
          <input type="date" min="2020-01-01" max="2025-12-31" />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Create Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
