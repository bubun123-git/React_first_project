import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "./Card";

function Expenseitem(props) {
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
    </Card>
  );
}

export default Expenseitem;
