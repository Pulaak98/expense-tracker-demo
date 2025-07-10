import { useState } from "react";
import "./App.css";
import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpenses/NewExpense";

function App() {
  const dummyExpenses = [
    {
      id: "e1",
      title: "Ice Cream",
      amount: 94.8,
      date: new Date(2025, 7, 14),
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799,
      date: new Date(2024, 2, 12),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294,
      date: new Date(2023, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2022, 5, 12),
    },
  ];

  const [expense, setExpense] = useState(dummyExpenses)

  const addDataHandler = (data) => {
    setExpense((prevState) => {
      return [data, ...prevState,]
    })

  }

  return (
    <div>
      <NewExpense onAddData={addDataHandler} />
      <Expenses items={expense} />
    </div>
  );
}

export default App;
