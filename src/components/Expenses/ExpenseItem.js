import React from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

function ExpenseItem(props) {
  const expsenseDate = props.date;

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={expsenseDate}></ExpenseDate>
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">{props.amount}</div>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;
