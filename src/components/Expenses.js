import React, { useState } from "react";
import Card from "./Card";
import ExpenseItem from "./ExpensesItem"; // Corrected component name
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {props.items.map((expense) => (
          <ExpenseItem
           key= {expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            place={expense.place}
          />
        ))}
      </Card>
    </div>
  );
}

export default Expenses;
