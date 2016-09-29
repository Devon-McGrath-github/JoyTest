import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

// import auth from './authReducer'
import images from './ImageReducer'
import banana from './bananaReducer'

const reducers = {
  routing: routerReducer,
  images: images,
  banana: banana
}

const appReducer = combineReducers(reducers)

export default appReducer
