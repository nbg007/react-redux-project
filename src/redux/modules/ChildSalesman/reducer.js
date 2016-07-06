import * as types from './constant'

const initState = {
    salesmanInfo: []
}

export default function (state = initState, action) {
    switch (action.type) {

        case types.GET_SALESMAN_INFO_SUCCESS:
            return Object.assign({}, state, {
                salesmanInfo: action.salesmanInfo
            })

        default:
            return state
    }
}
