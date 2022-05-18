import Expenses from "./components/Expenses/Expenses";

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
        <Expenses items={expenses} />
      </h1>
    </div>
  );
}

export default App;
