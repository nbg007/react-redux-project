import { combineReducers } from 'redux'
import counter from './Counter/reducer'
import login from './Login/reducer'
import form from './Form/reducer'

const rootReducer = combineReducers({
    counter,
    login,
    form
})

export default rootReducer
