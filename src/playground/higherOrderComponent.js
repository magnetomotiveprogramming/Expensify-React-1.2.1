console.log('SUCCESS!')

//Higher Order Component (HOC) - A component (HOC) that renders other component
//Reuse code
//Render hijacking
//Prop manipulation
//Abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
);

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>This is private info. Please don't share!</p>}
      <WrappedComponent {...props}/>
    </div>
  )
}

const AdminInfo = withAdminWarning(Info);

// const requireAuthentication = (WrappedComponent) => {
//   return (props) => {
//     if (props.isAuthenticated) {
//       return (
//         <div>
//           <h4>User Authenticated</h4>
//           <WrappedComponent {...props}/>
//         </div>
//       )
//     }
//   }
// }




const requireAuthentication = (WrappedComponent) => {

  return (props) => (
    <div>
      {props.isAuthenticated ? (
        <WrappedComponent {...props}/> 
        ):(
          <p>Not Authenticated. Please login</p>
        )}
    </div>
  )
}


const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info="These are the details"/>, document.getElementById('app'))

ReactDOM.render(<AuthInfo isAuthenticated={true} info="These are the details"/>, document.getElementById('app'))
