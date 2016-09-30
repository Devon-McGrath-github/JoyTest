// this setup allows for modular reducers
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

// only one reducer at the moment so not hugely useful yet.
import imageInfo from './ImageReducer'

const reducers = {
  routing: routerReducer,
  imageInfo: imageInfo
}

const appReducer = combineReducers(reducers)

export default appReducer
