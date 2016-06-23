import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from '../modules/rootReducer'
import thunk from 'redux-thunk'

const middleware = [thunk]

const finalCreateStore = compose(
  applyMiddleware(...middleware)
)(createStore)

module.exports = function configureStore(initialState) {
  return finalCreateStore(rootReducer, initialState)
}
