import "./Expenseitem.css";

function Expenseitem(props) {
  return (
    <div className="expense-item">
      <div>{props.date.toDateString()}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
      </div>
      <div className="expense-item__price">${props.amount}</div>
      <div className="expense-item__price">{props.place}</div>
    </div>
  );
}

export default Expenseitem;
