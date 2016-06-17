import React from 'react'
import { Route } from 'react-router'
import {
    App,
    Counter
} from './containers'

export default (
    <Route path="/" component={App}>
        <Route path="counter" component={Counter} />
    </Route>
)
