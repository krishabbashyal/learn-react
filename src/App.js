import ExpenseItem from "./components/ExpenseItem";

function App() {
  // prettier-ignore
  const expenses = [
    { id: "1", title: "6800XT GPU", amount: 767.34, date: new Date(2022, 5, 12) },
    { id: "2", title: "27 Inch 240hz IPS Panel", amount: 456.54, date: new Date(2022, 4, 12) },
    { id: "3", title: "Anne Pro 2", amount: 67.34, date: new Date(2022, 5, 12) },
    { id: "4", title: "Logitech G Pro Superlight", amount: 127.34, date: new Date(2022, 5, 12) },
  ];
  return (
    <div>
      <h1>
        Welcome, from here you can take a look at all of your previous expenses.
      </h1>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
