import React from 'react'
import { Route, IndexRoute } from 'react-router'
import auth from './utils/auth'
import {
    App,
    Login,
    Home,
    Qcode
} from './containers'

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Home} onEnter={requireAuth} />
        <Route path="home" component={Home} onEnter={requireAuth} />
        <Route path="login" component={Login} />
        <Route path="qcode" component={Qcode} />
    </Route>
)

function requireAuth(nextState, replace) {
    if (!auth.loginIn()) {
        replace({
            pathname: '/login',
            state: { nextPathname: nextState.location.pathname }
        })
    }
}
