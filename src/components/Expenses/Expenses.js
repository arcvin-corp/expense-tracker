import React, { useState } from 'react';
import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';

function Expenses(props) {
  const expenses = props.expenses;
  const [year, setYear] = useState(1);

  const filterSelectHandler = expenseYear => {
    setYear(prevState => {
      return prevState++;
    });
  };

  return (
    <div>
      <Card className="expenses">
        <h1>{year}</h1>
        <ExpensesFilter
          defaultYear={year}
          onFilterSelect={filterSelectHandler}
        />
        {expenses.map(e => (
          <ExpenseItem
            key={e.id}
            title={e.title}
            amount={e.amount}
            date={e.date}
          />
        ))}
      </Card>
    </div>
  );
}

export default Expenses;
