import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = props => {
  const [isEditing, setIsEditing] = useState(false);

  const formControlHandler = () => {
    setIsEditing(isEditing ? false : true);
  };

  const expenseDataSaveHandler = savedData => {
    const expenseData = {
      ...savedData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(isEditing ? false : true);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={formControlHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onClickCancel={formControlHandler}
          onExpenseDataSave={expenseDataSaveHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
