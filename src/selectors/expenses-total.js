export default (expenses = []) => {
  return expenses.map((expense) => expense.amount).reduce((a,b) => a + b, 0)
}

// export default (expenses = []) => {
//   if(expenses.length===0){
//     return 0
//   }else{
//     const amountArr = expenses.map((expense) => expense.amount)
//     const amountSum = amountArr.reduce((a,b) => a + b, 0)
//     return amountSum
//   } 
// }