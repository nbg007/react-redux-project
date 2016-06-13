import { combineReducers } from 'redux'
import form from './Form/reducer'
import login from './Login/reducer'
import qcode from './Qcode/reducer'

const rootReducer = combineReducers({
    form,
    login,
    qcode
})

export default rootReducer
