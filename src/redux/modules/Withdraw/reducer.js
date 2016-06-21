import * as types from './constant'

const initState = {
    bankInfo: [],
    lastBankInfo: {},
    accountId: '',
    expenditureStatus: false
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

        case types.ADD_ACCOUNT_SUCCESS:
            return Object.assign({}, state, {
                accountId: action.accountId
            })

        case types.EXPENDITURE_SUCCESS:
            return Object.assign({}, state, {
                expenditureStatus: action.status
            })

        case types.EXPENDITURE_FAILURE:
            return Object.assign({}, state, {
                expenditureStatus: false
            })

        default:
            return state
    }
}
