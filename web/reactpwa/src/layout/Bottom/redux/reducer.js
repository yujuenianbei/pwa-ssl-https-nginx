import {
    Page_Index,
  } from './action'
  
  const initValue = {
    pageIndex: 'home',
  }
  export default (state = initValue, action) => {
    const data = action.data
    switch (action.type) {
      // session
      case Page_Index: {
        return Object.assign({}, state, { pageIndex: data })
      }
      default: {
        return state;
      }
    }
  }