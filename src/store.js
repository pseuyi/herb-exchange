import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import rootReducer from './reducer'

export const history = createHistory()

const initialState = {}
const middleware = [ thunk, routerMiddleware(history), logger ]
const enhancers = []

if (process.env.NODE_ENV === 'development') {
  if(typeof window.devToolsExtension === 'function') enhancers.push(window.devToolsExtension())
}

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    ...enhancers
  )
)

export default store
