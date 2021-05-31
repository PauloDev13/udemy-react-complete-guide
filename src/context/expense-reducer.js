import { ADD_EXPENSE, DELETE_EXPENSE, TOGGLE_EXPENSE } from './expense-actions';

const expenseReducer = (state, action) => {
  switch (action.type) {
    case ADD_EXPENSE:
      return {
        ...state,
        expenses: [...state, action.payload],
      };
    case TOGGLE_EXPENSE:
      return {};
    case DELETE_EXPENSE:
      return {};
    default:
      return state;
  }
};

export default expenseReducer;
