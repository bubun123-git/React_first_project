import Expenseitem from "./components/ExpensesItem";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
      place: "ctc",
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799.49,
      date: new Date(2021, 2, 12),
      place: "rourkela",
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
      place: "balangir",
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
      place: "bbsr",
    },
  ];
  let expenseComponents = [];

  for (let i = 0; i < expenses.length; i++) {
    expenseComponents.push(
      <Expenseitem
        key={i}
        title={expenses[i].title}
        amount={expenses[i].amount}
        date={expenses[i].date}
        place={expenses[i].place}
      ></Expenseitem>
    );
  }
  return (
    <div>
      <h2>Let's get started!</h2>
      {expenseComponents}
    </div>
  );
}

export default App;
