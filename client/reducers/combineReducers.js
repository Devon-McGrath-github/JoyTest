import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

// import auth from './authReducer'
import imageInfo from './ImageReducer'
// import banana from './bananaReducer'

const reducers = {
  routing: routerReducer,
  imageInfo: imageInfo
}

const appReducer = combineReducers(reducers)

export default appReducer
