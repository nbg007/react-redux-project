import * as types from './constant'

const initState = {
    usageInfo: []
}

export default function (state = initState, action) {
    switch (action.type) {

        case types.GET_COUPON_USAGE_SUCCESS:
            return Object.assign({}, state, {
                usageInfo: action.usageInfo
            })

        default:
            return state
    }
}
