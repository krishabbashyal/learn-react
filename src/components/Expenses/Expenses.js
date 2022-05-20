import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [currentYear, setCurrentYear] = useState("2022");
  const filterArrayHandler = (year) => {
    setCurrentYear(year);
  };
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={currentYear}
          onFilter={filterArrayHandler}
        />

        {props.items.map((expense) => (
          <ExpenseItem
            title={expense.title}
            price={expense.price}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
