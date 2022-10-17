import React, { useState } from 'react';
import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';

function Expenses(props) {
  const [expenses, setExpenses] = useState(props.expenses);
  const [filterYear, setFilterYear] = useState('2022');

  const filterSelectHandler = selectedYear => {
    setFilterYear(selectedYear);
    setExpenses(prevExpenses => {
      return prevExpenses.filter(
        expenseItem => expenseItem.date.getFullYear() === +selectedYear
      );
    });
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          defaultYear={filterYear}
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
