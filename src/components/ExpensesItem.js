import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "./Card";


function Expenseitem(props) {
  const clickHandler=() => {
    console.log('clicked!!!');
    
  }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <ExpenseDetails
          title={props.title}
          amount={props.amount}
          place={props.place}
        ></ExpenseDetails>
      </div>
      <button onSubmit={clickHandler}>Change Title</button>
      <button onSubmit>Delete Expenses</button>
    </Card>
  );
}

export default Expenseitem;
