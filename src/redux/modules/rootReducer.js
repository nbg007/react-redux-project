import { combineReducers } from 'redux'
import form from './Form/reducer'
import modal from './Modal/reducer'
import login from './Login/reducer'
import qcode from './Qcode/reducer'
import user from './User/reducer'
import withdraw from './Withdraw/reducer'
import order from './Order/reducer'
import verification from './Verification/reducer'
import couponUsage from './CouponUsage/reducer'
import registSales from './RegistSales/reducer'
import childSalesman from './ChildSalesman/reducer'

const rootReducer = combineReducers({
    form,
    modal,
    login,
    qcode,
    user,
    withdraw,
    order,
    verification,
    couponUsage,
    registSales,
    childSalesman
})

export default rootReducer
