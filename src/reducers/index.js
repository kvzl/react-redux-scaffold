import { combineReducers } from 'redux'
import * as c from '../constants.js'

const defaultState = {
  init: false
}

function app(state = defaultState, action) {
  switch (action.type) {
    case c.INIT:
      return {
        ...state,
        ...{ init: true }
      }

    default:
      return state
  }
}


const reducer = combineReducers({
  app
});

export default reducer;
