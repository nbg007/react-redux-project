import React from 'react'
<<<<<<< HEAD
import { Route } from 'react-router'
import {
    App,
    Counter
=======
import { Route, IndexRoute } from 'react-router'
import { auth } from './utils'
import {
    App,
    Login,
    Home,
    Qcode
>>>>>>> 40b89d3edaa758328c886e9511658c1ee5d15924
} from './containers'

export default (
    <Route path="/" component={App}>
<<<<<<< HEAD
        <Route path="counter" component={Counter} />
    </Route>
)
=======
        <IndexRoute component={Home} onEnter={requireAuth} />
        <Route path="home" component={Home} onEnter={requireAuth} />
        <Route path="login" component={Login} />
        <Route path="qcode" component={Qcode} onEnter={requireAuth} />
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
>>>>>>> 40b89d3edaa758328c886e9511658c1ee5d15924
