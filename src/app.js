import React from 'react';
import ReactDOM from 'react-dom';
//The import below connects react to redux
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {addExpense, removeExpense, editExpense} from './actions/expenses';
import {setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

import 'normalize.css/normalize.css'
import './styles/style.scss';
import 'react-dates/lib/css/_datepicker.css';
  
const store = configureStore();

store.dispatch(addExpense({ 
  description: 'Water bill', 
  amount : 100
}));
store.dispatch(addExpense({ 
  description: 'Gas bill', 
  amount : 100,
  createdAt : 1000
}));
store.dispatch(addExpense({ 
  description: 'rent', 
  amount : 109500
}));



const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

console.log(visibleExpenses);


//The prop store equals the store variable on line 14
//"Provider" component is used in conjunction with Connect as part of the react-redux API. Look up ExpenseList.js to see how "provider" and "connect" work with eact other
const jsx = (
  <Provider store = {store}>
    <AppRouter />
  </Provider>
)



ReactDOM.render(jsx, document.getElementById('app'));


// store.subscribe(() => {
//   const state = store.getState();
//   const visibleExpenses = expensesSelector(state.expenses, state.filters);
//   console.log(visibleExpenses);
// });