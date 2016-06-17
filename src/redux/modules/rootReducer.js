import { combineReducers } from 'redux'
<<<<<<< HEAD
import counter from './Counter/reducer'

const rootReducer = combineReducers({
    counter
=======
import form from './Form/reducer'
import login from './Login/reducer'
import qcode from './Qcode/reducer'

const rootReducer = combineReducers({
    form,
    login,
    qcode
>>>>>>> 40b89d3edaa758328c886e9511658c1ee5d15924
})

export default rootReducer
