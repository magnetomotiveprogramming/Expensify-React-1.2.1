//THIS IS IMPORTANT! ES6 natively provides a spread operator ( ... ) for arrays , but not objects. So in this file, and other redux files in the future, we will be using a babel plugin called "transform-object-rest-spread". this plugin will let us spread
//For a list of babel plugins, please read .babelrc

import moment from 'moment';


const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date', //date or amount
  startDate: moment().startOf('month'),
  endDate: moment().endOf('month'),
};

export default (state=filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      };
    case 'SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy: 'amount', //date or amount
      };
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'date', //date or amount
      };
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.startDate
      };
    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.endDate
      };
    default:
      return state;
  }
}
