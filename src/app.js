import React from 'react';
import ReactDOM from 'react-dom';
//The import below connects react to redux
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetExpenses } from './actions/expenses';
import { login, logout } from './actions/auth';
// import {setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate} from './actions/filters';
// import getVisibleExpenses from './selectors/expenses';

import 'normalize.css/normalize.css'
import './styles/style.scss';
import 'react-dates/lib/css/_datepicker.css';
import { firebase } from './firebase/firebase';


const store = configureStore();

const jsx = (
  <Provider store = {store}>
    <AppRouter />
  </Provider>
)
let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('app'));
    hasRendered = true;
  }
}

ReactDOM.render(<p>...Loading</p>, document.getElementById('app'));



firebase.auth().onAuthStateChanged((users)=>{
  if(users){
    store.dispatch(login(users.uid))
    store.dispatch(startSetExpenses()).then(()=>{
      renderApp();
      if(history.location.pathname==='/'){
        history.push('/dashboard');
      }
    })
  } else {
    store.dispatch(logout())
    renderApp();
    history.push('/');
  }
});

// store.dispatch(addExpense({ 
//   description: 'Water bill', 
//   amount : 100
// }));
// store.dispatch(addExpense({ 
//   description: 'Gas bill', 
//   amount : 100,
//   createdAt : 1000
// }));
// store.dispatch(addExpense({ 
//   description: 'rent', 
//   amount : 109500
// }));



// const state = store.getState();
// const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

// console.log(visibleExpenses);


//The prop store equals the store variable on line 14
//"Provider" component is used in conjunction with Connect as part of the react-redux API. Look up ExpenseList.js to see how "provider" and "connect" work with eact other



// store.subscribe(() => {
//   const state = store.getState();
//   const visibleExpenses = expensesSelector(state.expenses, state.filters);
//   console.log(visibleExpenses);
// });