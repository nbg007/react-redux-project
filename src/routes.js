import React from 'react'
import { Route, IndexRoute } from 'react-router'
import { auth } from './utils'
import {
    App,
    Login,
    Home,
    Qcode,
    User,
    Withdraw,
    Order,
    Verification,
    CouponUsage,
    RegistSales,
    ChildSalesman,
    RegistMerchant,
    ChildMerchant
} from './containers'

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Home} onEnter={requireAuth} />
        <Route path="home" component={Home} onEnter={requireAuth} />
        <Route path="login" component={Login} />
        <Route path="qcode" component={Qcode} onEnter={requireAuth} />
        <Route path="user" component={User} onEnter={requireAuth} />
        <Route path="withdraw" component={Withdraw} onEnter={requireAuth} />
        <Route path="order" component={Order} onEnter={requireAuth} />
        <Route path="verification" component={Verification} onEnter={requireAuth} />
        <Route path="couponusage" component={CouponUsage} onEnter={requireAuth} />
        <Route path="registSales" component={RegistSales} onEnter={requireAuth} />
        <Route path="childSalesman" component={ChildSalesman} onEnter={requireAuth} />
        <Route path="registMerchant" component={RegistMerchant} onEnter={requireAuth} />
        <Route path="childMerchant" component={ChildMerchant} onEnter={requireAuth} />
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
