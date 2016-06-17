import React from 'react'
import { Route, IndexRoute } from 'react-router'
import { auth } from './utils'
import {
    App,
    Login,
    Home,
    Qcode,
    User,
    Withdraw
} from './containers'

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Home} onEnter={requireAuth} />
        <Route path="home" component={Home} onEnter={requireAuth} />
        <Route path="login" component={Login} />
        <Route path="qcode" component={Qcode} onEnter={requireAuth} />
        <Route path="user" component={User} onEnter={requireAuth} />
        <Route path="withdraw" component={Withdraw} onEnter={requireAuth} />
    </Route>
)

function requireAuth(nextState, replaceState) {
    if (!auth.loginIn()) {
        replaceState({
            pathname: '/login',
            state: { nextPathname: nextState.location.pathname }
        })
    }
}
