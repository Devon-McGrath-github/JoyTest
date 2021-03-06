import React from 'react'
import thunk from 'redux-thunk'

import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'

// -----------------------------

import actions from './actions'

import appReducer from './reducers/combineReducers'

import App from './components/App'
import Index from './containers/IndexContainer'
import Page1 from './containers/Page-1-Container'
import Page2 from './containers/Page-2-Container'
import Page3 from './containers/Page-3-Container'
import Page4 from './containers/Page-4-Container'
import Page5 from './containers/Page-5-Container'

// devToolsExtension is a chrome extension for redux development
let store = createStore(
  appReducer, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ))

const history = syncHistoryWithStore(hashHistory, store)

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={App}>
          <IndexRoute component={Index} />

          <Route path='page-1' component={Page1} />
          <Route path='page-2' component={Page2} />
          <Route path='page-3' component={Page3} />
          <Route path='page-4' component={Page4} />
          <Route path='page-5' component={Page5} />

        </Route>
      </Router>
    </Provider>,
    document.getElementById('app')
  )
})
