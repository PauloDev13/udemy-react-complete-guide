import Expenses from './components/expenses/Expenses';
import NewExpense from './components/newExpense/NewExpense';
import ExpenseState from './context/ExpenseState';

const App = () => {
  // const expenses = [
  //   {
  //     id: 1,
  //     title: 'Renault Clio',
  //     amount: '21.000,00',
  //     date: new Date(2010, 2, 1),
  //   },
  //   {
  //     id: 2,
  //     title: 'Renault Sandero',
  //     amount: '34.000,00',
  //     date: new Date(2020, 3, 1),
  //   },
  //   {
  //     id: 3,
  //     title: 'Ford KA',
  //     amount: '31.000,00',
  //     date: new Date(2018, 4, 1),
  //   },
  //   {
  //     id: 4,
  //     title: 'Wolkswagem Gol',
  //     amount: '28.000,00',
  //     date: new Date(2015, 5, 1),
  //   },
  // ];
  return (
    <div>
      <ExpenseState>
        <NewExpense />
        {/* <Expenses items={expenses} /> */}
        <Expenses />
      </ExpenseState>
    </div>
  );
};

export default App;
