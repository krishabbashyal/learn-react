import ExpenseItem from "./components/ExpenseItem";

function App() {
  // prettier-ignore
  const expenses = [
    { id: "1", title: "6800XT GPU", price: 767.34, date: new Date(2022, 5, 12) },
    { id: "2", title: "27 Inch 240hz IPS Panel", price: 456.54, date: new Date(2022, 4, 12) },
    { id: "3", title: "Anne Pro 2", price: 67.34, date: new Date(2022, 5, 12) },
    { id: "4", title: "Logitech G Pro Superlight", price: 127.34, date: new Date(2022, 5, 12) },
  ];
  return (
    <div>
      <h1>
        Welcome, from here you can take a look at all of your previous expenses.
      </h1>
      <ExpenseItem
        title={expenses[0].title}
        price={expenses[0].price}
        date={expenses[0].date}
      />

      <ExpenseItem
        title={expenses[1].title}
        price={expenses[1].price}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        price={expenses[2].price}
        date={expenses[2].date}
      />
      <ExpenseItem
        title={expenses[3].title}
        price={expenses[3].price}
        date={expenses[3].date}
      />
    </div>
  );
}

export default App;
