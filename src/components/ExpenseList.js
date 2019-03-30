import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem'
import selectExpenses from '../selectors/expenses';


export const ExpenseList = (props) => (
  <div>
    {
      props.expenses.length === 0 ? (
        <p>No Expenses</p>
      ):(
          props.expenses.map((expense)=>(
            <ExpenseListItem key={expense.id} {...expense} />
          )
        )
      )
    }
  </div>
);



// //Below is a Higher Order Component. the syntax may look weird, but this is not our API, so there is nothing we can do about it. We just have to use it according to their documentation.

// const ConnectedExpenseList = connect((state)=>{
//   return {
//     expenses: state.expenses
//   };
// })(ExpenseList);

// // Instead of "export default ExpenseList", we will export the higher order component, such as beluw.  
// export default ConnectedExpenseList; 

//But now we have to change a few things, such as setting an unnamed export, and extracting the function into a const.

const mapStateToProps = (state)=>{
  return {
    expenses: selectExpenses(state.expenses, state.filters )
  };
}


export default connect(mapStateToProps)(ExpenseList);



// {props.expenses.length}
//<ExpenseListItem {...props}/>