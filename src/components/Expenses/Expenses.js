import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

function Expenses(props) {
  const expenses = props.expenses;

  return (
    <Card className="expenses">
      {expenses.map((e) => (
        <ExpenseItem key={e.id} title={e.title} amount={e.amount} date={e.date} />
      ))}
    </Card>
  );
}

export default Expenses;
