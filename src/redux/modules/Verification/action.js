import { http } from '../../../utils'
import * as types from './constant'

// queryMemberCouponListByMerchant
export function queryCoupon(couponCode) {
    const query = {
        data: JSON.stringify({
            'couponCode': {
                'value': couponCode,
                'type': '='
            }
        })
    }

    return dispatch => {
        dispatch({ type: types.QUERY_COUPON_REQUEST })

        http
            .get('memberCoupon/queryMemberCouponListByMerchant', query)
            .then(res => {
                if (res.status === 200 && res.info.length) {
                    dispatch({
                        type: types.QUERY_COUPON_SUCCESS,
                        memberCoupon: res.info[0]
                    })
                } else {
                    dispatch({
                        type: types.QUERY_COUPON_FAILURE,
                        lastFetched: Date.now(),
                        errMsg: res.errMsg || '未查询到信息'
                    })
                }
            })
    }
}

export function resetCouponInfo() {
    return {
        type: types.INIT_COUPON_INFO
    }
}

export function cancelCoupon(payload) {
    return dispatch => {
        http
            .post('memberCoupon/cancelMemberCoupon', undefined, payload)
            .then(res => {
                if (res.status === 200) {
                    dispatch({
                        type: types.CANCEL_COUPON_SUCCESS,
                        couponId: payload.couponId
                    })
                } else {
                    dispatch({
                        type: types.CANCEL_COUPON_FAILURE,
                        couponId: payload.couponId
                    })
                }
            })
    }
}
