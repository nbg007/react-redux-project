import * as types from './constant'

const initState = {
    bankInfo: []
}

export default function (state = initState, action) {
    switch (action.type) {

        case types.GET_BANK_SUCCESS:
            return Object.assign({}, state, {
                bankInfo: action.bankInfo
            })

        default:
            return state
    }
}
