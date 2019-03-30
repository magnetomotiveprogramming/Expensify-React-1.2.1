import moment from 'moment';
import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';


test('should set default state',() => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
})

test('should remove expense by id',() => {
  const action = { 
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id,
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
})

test('should not remove expense by id if id is not found',() => {
  const action = { 
    type: 'REMOVE_EXPENSE',
    id: '-1',
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
})




test('should add an expense',() => {
  const newExpense={
    id: '109',
    description: 'Laptop',
    note: '',
    createdAt: 20000,
    amount: 29500
  };
  const action = {  
    type: 'ADD_EXPENSE',
    expenses: newExpense
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, newExpense]);
})

test('should edit an expense',() => {
  const amount = 122000;
  const action = {
    type:'EDIT_EXPENSE',
    id:expenses[1].id,
    updates: { amount }
  };
  const state = expensesReducer(expenses, action);
  expect(state[1].amount).toBe(amount);
})

test('should not edit an expense if expenses not found',() => {
  const amount = 122000;
  const action = {
    type:'EDIT_EXPENSE',
    id:'-1',
    updates: { amount }
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
})


// test('should add expense with default value',() => {
//   const action = { 
//     type: 'ADD_EXPENSE',
//     expenses:expenses[0]
//   };
//   const state = expensesReducer(undefined, action);
//   expect(state).toEqual([
//     ...state,
//     action.expenses
//   ]);
// })


// test('should setup default filter values', () => {
//   const state = filtersReducer(undefined, { type: '@@INIT' })
//   expect(state).toEqual({
//     text: '',
//     sortBy: 'date', 
//     startDate: moment().startOf('month'),
//     endDate: moment().endOf('month')
//   })
// });