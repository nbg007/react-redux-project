import { http } from '../../../utils'
import * as types from './constant'

export function getCouponUsage() {
    return dispatch => {
        http
            .get('couponUsage/getCouponUsageByChannleId')
            .then(res => {
                if (res.status === 200 && res.info.length > 0) {
                    dispatch({
                        type: types.GET_COUPON_USAGE_SUCCESS,
                        usageInfo: res.info
                    })
                } else {
                    dispatch({
                        type: types.GET_COUPON_USAGE_FAILURE,
                        errMsg: res.errMsg || '没有使用记录信息'
                    })
                }
            })
    }
}
