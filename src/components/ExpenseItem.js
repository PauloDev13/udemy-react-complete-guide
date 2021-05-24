import './ExpenseItem.css';

const ExpenseItem = () => {
  return (
    <div className="expense-item">
      <div>24 de maio de 2021</div>
      <div className="expense-item__description">
        <h2>Carrro</h2>
        <div className="expense-item__price">R$ 21.000,00</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
