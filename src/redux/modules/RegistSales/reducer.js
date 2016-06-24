import * as types from './constant'

const initState = {
    salesmanType: [],
    registStatus: false
}

export default function (state = initState, action) {
    switch (action.type) {

        case types.GET_SALESMAN_TYPE_SUCCESS:
            return Object.assign({}, state, {
                salesmanType: action.salesmanType
            })

        case types.REGIST_SALESMAN_TYPE_SUCCESS:
            return Object.assign({}, state, {
                registStatus: action.registStatus
            })

        case types.REGIST_SALESMAN_TYPE_FAILURE:
            return Object.assign({}, state, {
                registErrMsg: action.errMsg,
                registStatus: false
            })

        case types.INIT_REGIST_STATUS:
            return Object.assign({}, state, {
                registStatus: initState.registStatus
            })

        default:
            return state
    }
}
