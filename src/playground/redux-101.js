import { createStore } from 'redux';

const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy
})

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy
})

//this one no need to destructore into {}={} since we forced the user to setcount
const setCount = ({ count }) => ({
  type: 'SET',
  count
})

const resetCount = () => ({
  type: 'RESET'
})

const countReducer = (state={count : 0}, action) => {
  switch(action.type) {
    case 'INCREMENT':
      return {
        count: state.count +  action.incrementBy
      };
    case 'DECREMENT':
      return {
        count: state.count -  action.decrementBy
      };
    case 'SET':
    return {
      count: action.count
    };
    case 'RESET':
      return {
        count: 0
      };
    default:
      return state;
  }
};



const store = createStore(countReducer)



const unsubscribe = store.subscribe(()=>{
  console.log(store.getState());
});

store.dispatch(incrementCount({incrementBy: 5}))

store.dispatch(incrementCount())

store.dispatch(resetCount())

store.dispatch(decrementCount())

store.dispatch(decrementCount({decrementBy: 10}))

store.dispatch(setCount({count: 101}))



// store.dispatch({
//   type:'RESET'
// })

// store.dispatch({
//   type:'DECREMENT'
// })


// store.dispatch({
//   type:'DECREMENT',
//   decrementBy:10
// })

// store.dispatch({
//   type:'SET',
//   count:101
// })


// unsubscribe();