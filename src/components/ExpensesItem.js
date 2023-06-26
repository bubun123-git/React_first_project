import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "./Card";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);
  const [amount, setExpense] = useState(props.amount);

  const clickHandler = () => {
    setTitle("Updated!");
    console.log(title);
  };

  const changeExpense = () => {
    setExpense("$100");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <ExpenseDetails
          title={title}
          amount={amount}
          place={props.place}
        />
      </div>
      <button onClick={clickHandler}>Change Title</button>
      <button>Delete Expense</button>
      <button onClick={changeExpense}>Change Expense</button>
    </Card>
  );
}

export default ExpenseItem;

  );
}

export default Expenseitem;
