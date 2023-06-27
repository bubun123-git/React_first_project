import React, { useState } from "react";
import "./NewExpense.css";

function ExpenseForm() {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredPlace, setEnteredPlace] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const placeChangeHandler = (event) => {
    setEnteredPlace(event.target.value);
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={titleChangeHandler}
            placeholder="Enter title"
          />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            placeholder="Enter amount"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            placeholder="Enter date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
        
        <div className="new-expense__control">
          <label>Place</label>
          <input
            type="text"
            onChange={placeChangeHandler}
            placeholder="Enter place"
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
