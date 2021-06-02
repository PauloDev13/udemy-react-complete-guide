import Chart from '../chart/Chart';

const ExpensesChart = (props) => {
  const chartDataPoints = [
    { label: 'jan', value: 0 },
    { label: 'fev', value: 0 },
    { label: 'mar', value: 0 },
    { label: 'abr', value: 0 },
    { label: 'mai', value: 0 },
    { label: 'jun', value: 0 },
    { label: 'jul', value: 0 },
    { label: 'ago', value: 0 },
    { label: 'set', value: 0 },
    { label: 'out', value: 0 },
    { label: 'nov', value: 0 },
    { label: 'dez', value: 0 },
  ];

  for (const expense of props.expenses) {
    const expenseMonth = expense.date.getMonth();
    chartDataPoints[expenseMonth].value += expense.amount;
  }

  return <Chart dataPoints={chartDataPoints} />;
};

export default ExpensesChart;
