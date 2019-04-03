//THIS IS IMPORTANT! ES6 natively provides a spread operator ( ... ) for arrays , but not objects. So in this file, and other redux files in the future, we will be using a babel plugin called "transform-object-rest-spread". this plugin will let us spread
//For a list of babel plugins, please read .babelrc

import uuid from 'uuid';
import database from '../firebase/firebase'

export const addExpense = (expense) => ({
  type:'ADD_EXPENSE',
  expense
})

export const startAddExpense = (expenseData = {}) => {
  return (dispatch) => {
    const { 
      description = '', 
      note = '', 
      amount = 0, 
      createdAt = 0 
    } = expenseData;
    const expense = { description, note, amount, createdAt };

    return database.ref('expenses').push(expense).then((ref)=>{
      dispatch(addExpense({
        id: ref.key,
        ...expense
      }));
    });
  };
};


export const removeExpense = ({ id } = {}) => ({
  type:'REMOVE_EXPENSE',
  id
})

export const editExpense = (id, updates) => ({
  type:'EDIT_EXPENSE',
  id,
  updates
})

//SET_EXPENSES
export const setExpenses = (expenses) => ({
  type:'SET_EXPENSES',
  expenses
})


export const startSetExpenses = () => {
  return (dispatch)=>{
    return database.ref('expenses').once('value').then((snapshot)=>{
      const expenses = [];
      snapshot.forEach((childSnapshot)=>{
        expenses.push({
          id:childSnapshot.key,
          ...childSnapshot.val()
        });
      });      
      dispatch(setExpenses(expenses))
    });    
  }
};



// export const startSetExpenses = () => {
//   return (dispatch)=>{
  
//     return database.ref('expenses')
//     .once('value', (snapshot)=>{
//       const expenses = [];
//       snapshot.forEach((childSnapshot)=>{
//         expenses.push({
//           id:childSnapshot.key,
//           ...childSnapshot.val()
//         });
//       });      
//       console.log(snapshot.val());
//       console.log(expenses);
//       dispatch(setExpenses(expenses))
//     }, (e)=>{
//       console.log(e);    
//     })
//   }
  
// }


// export const startsetExpenses = (expenseData = {}) => {
//   return (dispatch) => {
//     const { 
//       description = '', 
//       note = '', 
//       amount = 0, 
//       createdAt = 0 
//     } = expenseData;
//     const expense = { description, note, amount, createdAt };

//     return database.ref('expenses').push(expense).then((ref)=>{
//       dispatch(addExpense({
//         id: ref.key,
//         ...expense
//       }));
//     });
//   };
// };


// database.ref('expenses')
//   .on('value', (snapshot)=>{
//     const expenses = [];
//     snapshot.forEach((childSnapshot)=>{
//       expenses.push({
//         id:childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });
//     console.log(expenses);
//   }, (e)=>{
//     console.log("val");    
//   }
// )





// export const addExpense = (expense) => ({
//   type:'ADD_EXPENSE',
//   expense
// })

// export const startAddExpense = (expenseData = {}) => {
//   return (dispatch) => {
//     const { 
//       description = '', 
//       note = '', 
//       amount = 0, 
//       createdAt = 0 
//     } = expenseData;
//     const expense = { description, note, amount, createdAt };

//     return database.ref('expenses').push(expense).then((ref)=>{
//       dispatch(addExpense({
//         id: ref.key,
//         ...expense
//       }));
//     });
//   };
// };