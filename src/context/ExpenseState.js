import { useReducer } from 'react';
import { ADD_EXPENSE, DELETE_EXPENSE } from './expense-actions';
import ExpenseContext from './expense-context';
import expenseReducer from './expense-reducer';

const ExpenseState = (props) => {
  const initialState = {
    expenses: [
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
    ],
  };

  const [state, dispatch] = useReducer(expenseReducer, initialState);

  // Add Expense
  const addExpense = (expense) => {
    dispatch({
      type: ADD_EXPENSE,
      payload: expense,
    });
  };

  const deleteExpense = (expenseId) => {
    dispatch({
      type: DELETE_EXPENSE,
      payload: expenseId,
    });
  };

  return (
    <ExpenseContext.Provider
      value={{
        expenses: state.expenses,
        addExpense,
        deleteExpense,
      }}
    >
      {props.children}
    </ExpenseContext.Provider>
  );
};

export default ExpenseState;
