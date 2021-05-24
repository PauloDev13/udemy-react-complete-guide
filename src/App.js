import ExpenseItem from './components/ExpenseItem';

function App() {
  const expenses = [
    {
      id: 1,
      title: 'Renault Clio',
      amount: '21.000,00',
      date: new Date(2010, 2, 1),
    },
    {
      id: 2,
      title: 'Renault Sandero',
      amount: '34.000,00',
      date: new Date(2020, 3, 1),
    },
    {
      id: 3,
      title: 'Ford KA',
      amount: '31.000,00',
      date: new Date(2018, 4, 1),
    },
    {
      id: 4,
      title: 'Wolkswagem Gol',
      amount: '28.000,00',
      date: new Date(2015, 5, 1),
    },
  ];
  return (
    <div>
      <h1>Bem vindo</h1>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      />
    </div>
  );
}

export default App;
