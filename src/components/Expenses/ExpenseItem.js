import { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);
  const [lowerCase, setLowerCase] = useState(true);

  const expsenseDate = props.date;

  const clickHandler = () => {
    if (lowerCase) {
      setTitle(title.toLowerCase());
      setLowerCase(false);
    } else {
      setTitle(title.toUpperCase());
      setLowerCase(true);
    }
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={expsenseDate}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
      <button onClick={clickHandler}>Chnage Title</button>
    </Card>
  );
}

export default ExpenseItem;
