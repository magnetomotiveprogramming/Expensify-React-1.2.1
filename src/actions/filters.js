//THIS IS IMPORTANT! ES6 natively provides a spread operator ( ... ) for arrays , but not objects. So in this file, and other redux files in the future, we will be using a babel plugin called "transform-object-rest-spread". this plugin will let us spread
//For a list of babel plugins, please read .babelrc

export const setTextFilter = (text='') => ({
  type:'SET_TEXT_FILTER',
  text
  
})

export const sortByDate = () => ({
  type:'SORT_BY_DATE',
})

export const sortByAmount = () => ({
  type:'SORT_BY_AMOUNT',
})

export const setStartDate = (startDate) => ({
  type:'SET_START_DATE',
  startDate
})

export const setEndDate = (endDate) => ({
  type:'SET_END_DATE',
  endDate
})
