//THIS IS IMPORTANT! ES6 natively provides a spread operator ( ... ) for arrays , but not objects. So in this file, and other redux files in the future, we will be using a babel plugin called "transform-object-rest-spread". this plugin will let us spread
//For a list of babel plugins, please read .babelrc

import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

const addExpense = (
  { 
    description = '', 
    note = '', 
    amount = '', 
    createdAt=0 
  }={}
) => ({
  type:'ADD_EXPENSE',
  expenses:{
    id: uuid(),
    description,
    note,
    amount, 
    createdAt
  }
})

const removeExpense = ({ id } = {}) => ({
  type:'REMOVE_EXPENSE',
  id
})

const editExpense = (id, updates) => ({
  type:'EDIT_EXPENSE',
  id,
  updates
})

const setTextFilter = (text='') => ({
  type:'SET_TEXT_FILTER',
  text
  
})

const sortByDate = () => ({
  type:'SORT_BY_DATE',
})

const sortByAmount = () => ({
  type:'SORT_BY_AMOUNT',
})

const setStartDate = (startDate) => ({
  type:'SET_START_DATE',
  startDate
})

const setEndDate = (endDate) => ({
  type:'SET_END_DATE',
  endDate
})


//Expenses Reducer

const expensesReducerDefaultState = [];

const expensesReducer = (state=expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [
        ...state,
        action.expenses
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
      })
    default:
      return state;
  }
}

//Filters Reducer

const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date', //date or amount
  startDate: undefined,
  endDate: undefined
};

const filtersReducer = (state=filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      };
    case 'SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy: 'amount', //date or amount
      };
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'date', //date or amount
      };
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.startDate
      };
    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.endDate
      };
    default:
      return state;
  }
}

// Get visible expenses

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses.filter((expense) => {
    const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
    const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch;
  }).sort((a, b)=>{
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1;
    }
    if (sortBy === 'amount') {
      return a.amount < b.amount ? 1 : -1;
    }
  });
}

//Store creation

const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

const expensesOne = store.dispatch(addExpense({ 
  description: 'Rent', 
  amount : 100,
  createdAt : -21000
}));

const expensesTwo = store.dispatch(addExpense({ 
  description: 'Coffee', 
  amount : 300,
  createdAt :-1000
}));

// store.dispatch(removeExpense({ id: expensesOne.expenses.id }));
// store.dispatch(editExpense(expensesTwo.expenses.id,{ amount: 500 }));
// store.dispatch(setTextFilter('rent'));
store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(-1250));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(0));




const demoState = {
  expenses: [{
    id: '123456789',
    description: 'January rent',
    note: 'this was the final payment',
    amount: 12300,
    createdAt: 0
  }],

  filters: {
    text: 'rent',
    sortBy: 'amount', //date or amount
    startDate: undefined,
    endDate: undefined
  }
}





// const incrementCount = ({ incrementBy = 1 } = {}) => ({
//   type: 'INCREMENT',
//   incrementBy
// })

// const decrementCount = ({ decrementBy = 1 } = {}) => ({
//   type: 'DECREMENT',
//   decrementBy
// })

// //this one no need to destructore into {}={} since we forced the user to setcount
// const setCount = ({ count }) => ({
//   type: 'SET',
//   count
// })

// const resetCount = () => ({
//   type: 'RESET'
// })

// const countReducer = (state={count : 0}, action) => {
//   switch(action.type) {
//     case 'INCREMENT':
//       return {
//         count: state.count +  action.incrementBy
//       };
//     case 'DECREMENT':
//       return {
//         count: state.count -  action.decrementBy
//       };
//     case 'SET':
//     return {
//       count: action.count
//     };
//     case 'RESET':
//       return {
//         count: 0
//       };
//     default:
//       return state;
//   }
// };



// const store = createStore(countReducer)



// const unsubscribe = store.subscribe(()=>{
//   console.log(store.getState());
// });

// store.dispatch(incrementCount({incrementBy: 5}))

// store.dispatch(incrementCount())

// store.dispatch(resetCount())

// store.dispatch(decrementCount())

// store.dispatch(decrementCount({decrementBy: 10}))

// store.dispatch(setCount({count: 101}))



// store.dispatch({
//   type:'RESET'
// })

// store.dispatch({
//   type:'DECREMENT'
// })


// store.dispatch({
//   type:'DECREMENT',
//   decrementBy:10
// })

// store.dispatch({
//   type:'SET',
//   count:101
// })


// unsubscribe();