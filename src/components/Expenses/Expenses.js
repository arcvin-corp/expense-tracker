import React, { useState } from 'react';
import './Expenses.css';

import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import Card from '../UI/Card';

function Expenses(props) {
  const [filterYear, setFilterYear] = useState('2019');

  const filterSelectHandler = selectedYear => {
    setFilterYear(selectedYear);
  };

  const filteredExpenses = props.expenses.filter(
    exp => exp.date.getFullYear().toString() === filterYear
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          defaultYear={filterYear}
          onFilterSelect={filterSelectHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
