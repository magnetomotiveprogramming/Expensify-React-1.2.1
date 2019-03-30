import { addExpense, editExpense, removeExpense } from '../../actions/expenses';


test('should setup remove expense action object', () => {
  const action = removeExpense({ id: '123abc' })
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  })
})

test('should setup edit expense action object', () => {
  const action = editExpense('12345', { note: 'hey man!'})
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '12345',
    updates: { note: 'hey man!' }
  })
})

test('should setup add expense action object with provided values', () => {
  const expenseData = {
     description: "Rent", 
     amount: "109500", 
     createdAt: 1000,
     note: "This was last months rent"
  };
  const action = addExpense(expenseData)
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expenses:{
      ...expenseData,
      id: expect.any(String)
    }
  })
})

test('should setup add expense action object with default values', () => {
  const expenseData = {};
  const action = addExpense(expenseData)
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expenses:{
      description : '', 
      note : '', 
      amount : 0, 
      createdAt:0,
      id: expect.any(String)
    }
  })
})

// export const addExpense = (
//   { 
//     description = '', 
//     note = '', 
//     amount = '', 
//     createdAt=0 
//   }={}
// ) => ({
//   type:'ADD_EXPENSE',
//   expenses:{
//     id: uuid(),
//     description,
//     note,
//     amount, 
//     createdAt
//   }
// })