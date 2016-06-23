import * as types from './constant'

const initState = {
    orderInfo: []
}

export default function (state = initState, action) {
    switch (action.type) {

        case types.GET_ORDER_SUCCESS:
            return Object.assign({}, state, {
                orderInfo: action.orderInfo
            })

        default:
            return state
    }
}
