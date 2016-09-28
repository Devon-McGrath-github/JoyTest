import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

// import auth from './authReducer'
import placeholder from './PlaceholderReducer'
import banana from './bananaReducer'

const reducers = {
  routing: routerReducer,
  placeholder: placeholder
}

const appReducer = combineReducers(reducers)

export default appReducer
