import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from '../modules/rootReducer'
import thunk from 'redux-thunk'

const middleware = [thunk]

const finalCreateStore = compose(
    // Middleware you want to use in development:
    applyMiddleware(...middleware),
    typeof window === 'object' &&
    typeof window.devToolsExtension !== 'undefined' ?
    window.devToolsExtension() : f => f
)(createStore)

module.exports = function configureStore(initialState) {
    const store = finalCreateStore(rootReducer, initialState)

    // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
    if (module.hot) {
        module.hot.accept('../modules/rootReducer', () =>
            store.replaceReducer(require('../modules/rootReducer'))
        )
    }

    return store
}
