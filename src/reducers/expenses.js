//THIS IS IMPORTANT! ES6 natively provides a spread operator ( ... ) for arrays , but not objects. So in this file, and other redux files in the future, we will be using a babel plugin called "transform-object-rest-spread". this plugin will let us spread
//For a list of babel plugins, please read .babelrc

const expensesReducerDefaultState = [];

export default (state=expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [
        ...state,
        action.expense
      ];
    case 'REMOVE_EXPENSE':
      return state.filter(({ id })=> id !== action.id)
    case 'EDIT_EXPENSE':
      return state.map((expense)=> {
        if(expense.id == action.id){
          return {
            ...expense,
            ...action.updates
          };
        } else {
          return expense
        }
      });
    case 'SET_EXPENSES':
      return action.expenses
    default:
      return state;
  }
}
