import { useState } from 'react';
import Expenses from './components/expenses/Expenses';
import NewExpense from './components/newExpense/NewExpense';
// import ExpenseState from './context/ExpenseState';
const DUMMY_EXPENSES = [
  {
    id: 1,
    title: 'Renault Clio',
    amount: 21000,
    date: new Date(2019, 2, 1),
  },
  {
    id: 2,
    title: 'Renault Sandero',
    amount: 34000,
    date: new Date(2020, 3, 1),
  },
  {
    id: 3,
    title: 'Ford KA',
    amount: 31000,
    date: new Date(2021, 4, 1),
  },
  {
    id: 4,
    title: 'Wolkswagem Gol',
    amount: 28000,
    date: new Date(2019, 5, 1),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevState) => [expense, ...prevState]);
  };

  return (
    <div>
      {/* <ExpenseState> */}
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
      {/* <Expenses /> */}
      {/* </ExpenseState> */}
    </div>
  );
};

export default App;
