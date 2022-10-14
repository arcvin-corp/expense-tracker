import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = props => {
  const expenseDataSaveHandler = savedData => {
    const expenseData = {
      ...savedData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onExpenseDataSave={expenseDataSaveHandler} />
    </div>
  );
};

export default NewExpense;
