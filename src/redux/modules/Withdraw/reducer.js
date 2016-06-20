import * as types from './constant'

const initState = {
    bankInfo: [],
    lastBankInfo: { id: '' }
}

export default function (state = initState, action) {
    switch (action.type) {

        case types.GET_BANK_SUCCESS:
            return Object.assign({}, state, {
                bankInfo: action.bankInfo
            })

        case types.GET_LAST_SUCCESS:
            return Object.assign({}, state, {
                lastBankInfo: action.lastBankInfo
            })

        default:
            return state
    }
}
