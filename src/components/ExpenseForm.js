import React from "react";
import "./NewExpense.css";

function ExpenseForm() {
  const titleChangeHandler = (event) => {
    console.log(event.target.value);
  };
  const AmountChangeHandler = (event) => {
    console.log(event.target.value);
  };
  const DateChangeHandler = (event) => {
    console.log(event.target.value);
  };
  const PlaceChangeHandler = (event) => {
    console.log(event.target.value);
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
            onChange={AmountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            placeholder="Enter date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={DateChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Place</label>
          <input
            type="text"
            onChange={PlaceChangeHandler}
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
