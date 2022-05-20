import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpenses from "./components/NewExpenses/NewExpenses";

const defaultExpenses = [
  { id: "1", title: "6800XT GPU", price: 767.34, date: new Date(2022, 5, 12) },
  {
    id: "2",
    title: "27 Inch 240hz IPS Panel",
    price: 456.54,
    date: new Date(2022, 4, 12),
  },
  { id: "3", title: "Anne Pro 2", price: 67.34, date: new Date(2022, 5, 12) },
  {
    id: "4",
    title: "Logitech G Pro Superlight",
    price: 127.34,
    date: new Date(2022, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(defaultExpenses);

  const onCompletionHandler = (enteredExpenseData) => {
    setExpenses((prevExpenses) => {
      return [enteredExpenseData, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpenses giveData={onCompletionHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
