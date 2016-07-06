import * as types from './constant'

const initState = {
    merchantType: [],
    registStatus: false
}

export default function (state = initState, action) {
    switch (action.type) {

        case types.GET_MERCHANT_TYPE_SUCCESS:
            return Object.assign({}, state, {
                merchantType: action.merchantType
            })

        case types.REGIST_MERCHANT_SUCCESS:
            return Object.assign({}, state, {
                registStatus: action.registStatus
            })

        case types.REGIST_MERCHANT_FAILURE:
            return Object.assign({}, state, {
                registErrMsg: action.errMsg,
                registStatus: false
            })

        case types.INIT_REGIST_MERCHANT_STATUS:
            return Object.assign({}, state, {
                registStatus: initState.registStatus
            })

        default:
            return state
    }
}
