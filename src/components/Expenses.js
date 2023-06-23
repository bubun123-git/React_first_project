import Card from "./Card";
import Expenseitem from "./ExpensesItem";
import './Expenses.css'


function Expenses(props) {
  return (
    <Card className="expenses">
      <Expenseitem>
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
        place={props.items[0].place}
      </Expenseitem>
      <Expenseitem>
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
        place={props.items[1].place}
      </Expenseitem>
      <Expenseitem>
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
        place={props.items[2].place}
      </Expenseitem>
      <Expenseitem>
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
        place={props.items[3].place}
      </Expenseitem>
    </Card>
  );
}
export default Expenses;
