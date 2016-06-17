import { combineReducers } from 'redux'
import form from './Form/reducer'
import modal from './Modal/reducer'
import login from './Login/reducer'
import qcode from './Qcode/reducer'
import user from './User/reducer'
import withdraw from './Withdraw/reducer'

const rootReducer = combineReducers({
    form,
    modal,
    login,
    qcode,
    user,
    withdraw
})

export default rootReducer
