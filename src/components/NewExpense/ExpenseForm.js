import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = props => {
  const [userInput, setUserInput] = useState({
    title: '',
    amount: '',
    date: '',
  });

  const changeTitleHandler = event => {
    setUserInput(prevState => {
      return {
        ...prevState,
        title: event.target.value,
      };
    });
  };

  const changeAmountHandler = event => {
    setUserInput(prevState => {
      return {
        ...prevState,
        amount: +event.target.value,
      };
    });
  };

  const changeDateHandler = event => {
    setUserInput(prevState => {
      return {
        ...prevState,
        date: event.target.value,
      };
    });
  };

  const submitHandler = event => {
    event.preventDefault();
    const expenseData = {
      ...userInput,
      date: new Date(userInput.date),
    };

    props.onExpenseDataSave(expenseData);
    setUserInput({
      title: '',
      amount: '',
      date: '',
    });
  };

  const cancelFormHandler = e => {
    props.onClickCancel();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={userInput.title}
            onChange={changeTitleHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={userInput.amount}
            onChange={changeAmountHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={userInput.date}
            onChange={changeDateHandler}
          />
        </div>
        <div className="new-expense__actions">
          <button type="button" onClick={cancelFormHandler}>
            Cancel
          </button>
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
