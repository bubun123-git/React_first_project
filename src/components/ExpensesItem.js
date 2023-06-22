import "./ExpenseItem.css";
import ExpenseDate from './ExpenseDate' ;
import ExpenseDetails from './ExpenseDetails';

function Expenseitem(props) {
  
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <ExpenseDetails title= {props.title} amount={props.amount} place={props.place} ></ExpenseDetails>
      </div>
     
    </div>
  );
}

export default Expenseitem;
