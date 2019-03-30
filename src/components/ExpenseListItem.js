import React from 'react';
import { Link } from 'react-router-dom';


const ExpenseListItem = ({ id, description, amount, createdAt }) => (
  <div>
    <Link to={`/edit/${id}`}><h3>{description}</h3></Link>
    <p>{amount} - {createdAt}</p>
  </div>
)

export default ExpenseListItem;


// const ExpenseListItem = (props) => (
//   <div>
//     <p>These are the expenses</p>
//     <ol>
//       {props.expenses.map(({ id, description, amount, createdAt}) => 
//           ( 
//             <li key={id}>
//                 Description: {description}<br />
//                 Amount: {amount}<br />
//                 Created At: {createdAt}<br /><br />
//             </li>
//           ) 
//         )
//       }
//     </ol>

//   </div>
// )

// export default ExpenseListItem;


