import "./ExpenseItem.css";
import { months } from "../config";

function ExpenseItem() {
  const expenseDate = new Date();
  const expenseTitle = "Bike insurance";
  const expensePrice = 250.55;

  return (
    <div className="expense-item">
      <h2>{`${months[expenseDate.getMonth()]} ${expenseDate.getDate()} ${expenseDate.getFullYear()}`}</h2>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">
          <h2>{expensePrice}</h2>
        </div>
      </div>
    </div>
  );
}

export default ExpenseItem;
