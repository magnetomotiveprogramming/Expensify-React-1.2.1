import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('should setup default filter values', () => {
  const state = filtersReducer(undefined, { type: '@@INIT' })
  expect(state).toEqual({
    text: '',
    sortBy: 'date', 
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  })
});

test('should set sortBy to amount', () => {
  const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' })
  expect(state.sortBy).toBe('amount')
});

test('should se sortBy to date', () => {
  const currentState={
    text: '',
    startDate: undefined,
    endDate: undefined,
    sortBy: 'amount'
  }
  const action = { type: 'SORT_BY_DATE' };
  const state = filtersReducer(currentState, action);
  expect(state.sortBy).toBe('date');
});


test('should set text filter', () => {
  const text = 'text';
  const action = { 
    type: 'SET_TEXT_FILTER',
    text
  };
  const state = filtersReducer(undefined, action)
  expect(state.text).toBe(text)
});

test('should set start date filter', () => {
  const startDate = moment(0);
  const action = { 
    type: 'SET_START_DATE',
    startDate
  };
  const state = filtersReducer(undefined, action)
  expect(state.startDate).toBe(startDate)
});

test('should set end date filter', () => {
  const endDate = moment(0);
  const action = { 
    type: 'SET_END_DATE',
    endDate
  };
  const state = filtersReducer(undefined, action)
  expect(state.endDate).toBe(endDate)
});


  // const filtersReducerDefaultState = {
  // 
  
  
//   test('should set sortBy to date', () => {
//   const state = filtersReducer(undefined, { type: 'SORT_BY_DATE' })
//   expect(state.sortBy).toBe('date')
// });
  
// test('should set startDate', () => {
//   const state = filtersReducer(undefined, { type: 'SET_START_DATE' })
//   expect(state.startDate).toBe(moment(0))
// });