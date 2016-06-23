import * as types from './constant'

const initState = {
    balance: 0,
    accountId: ''
}

export default function (state = initState, action) {
    switch (action.type) {

        case types.GET_ACCOUNT_SUCCESS:
            return Object.assign({}, state, {
                balance: action.info.balance,
                accountId: action.info.id
            })

        default:
            return state
    }
}
