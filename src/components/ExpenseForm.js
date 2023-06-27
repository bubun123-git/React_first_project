import React from "react";
import "./NewExpense.css";

function ExpenseForm() {
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" placeholder="Enter title" />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" placeholder="Enter amount" min="0.01" step="0.01" />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" placeholder="Enter date" min="2019-01-01" max="2022-12-31" />
        </div>
        <div className="new-expense__control">
          <label>Place</label>
          <input type="text" placeholder="Enter place" />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
