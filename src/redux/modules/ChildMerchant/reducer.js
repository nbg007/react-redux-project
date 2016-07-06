import * as types from './constant'

const initState = {
    merchantInfo: []
}

export default function (state = initState, action) {
    switch (action.type) {

        case types.GET_MERCHANT_INFO_SUCCESS:
            return Object.assign({}, state, {
                merchantInfo: action.merchantInfo
            })

        default:
            return state
    }
}
