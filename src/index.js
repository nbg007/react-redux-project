import 'babel-polyfill'
import 'isomorphic-fetch'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { browserHistory, Router } from 'react-router'
import { configureStore } from './redux/store/configureStore'
import routes from './routes'
import './styles/main.scss'

const store = configureStore()

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>,
    document.getElementById('root')
)
