import * as types from './constant'

const initState = {

}

export default function (state = initState, action) {
    switch (action.type) {

        case types.QUERY_COUPON_REQUEST:
            return Object.assign({}, state, {
                isLoading: true
            })

        case types.QUERY_COUPON_SUCCESS:
            return Object.assign({}, state, {
                info: action.memberCoupon,
                isLoading: false,
                errMsg: null
            })

        case types.QUERY_COUPON_FAILURE:
            return Object.assign({}, state, {
                errMsg: action.errMsg,
                lastFetched: action.lastFetched,
                isLoading: false,
                info: null
            })

        case types.INIT_COUPON_INFO:
            return initState

        case types.CANCEL_COUPON_SUCCESS:
            return Object.assign({}, state, {
                couponId: action.couponId,
                cancelCouponStatus: true
            })

        default:
            return state
    }
}
