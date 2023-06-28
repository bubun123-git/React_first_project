import React from "react";
import Card from "./Card";
import ExpenseItem from "./ExpensesItem"; // Corrected component name
import "./Expenses.css";

function Expenses(props) {
  return (
    <div>
      <Card className="expenses">
        <ExpenseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
          place={props.items[0].place}
        />
        <ExpenseItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
          place={props.items[1].place}
        />
        <ExpenseItem
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
          place={props.items[2].place}
        />
        <ExpenseItem
          title={props.items[3].title}
          amount={props.items[3].amount}
          date={props.items[3].date}
          place={props.items[3].place}
        />
      </Card>
    </div>
  );
}

export default Expenses;
