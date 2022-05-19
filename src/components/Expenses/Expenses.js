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
        <ExpenseItem
          id={props.items[0].id}
          title={props.items[0].title}
          price={props.items[0].price}
          date={props.items[0].date}
        />
        <ExpenseItem
          id={props.items[1].id}
          title={props.items[1].title}
          price={props.items[1].price}
          date={props.items[1].date}
        />
        <ExpenseItem
          id={props.items[2].id}
          title={props.items[2].title}
          price={props.items[2].price}
          date={props.items[2].date}
        />
        <ExpenseItem
          id={props.items[3].id}
          title={props.items[3].title}
          price={props.items[3].price}
          date={props.items[3].date}
        />
      </Card>
    </div>
  );
};

export default Expenses;
