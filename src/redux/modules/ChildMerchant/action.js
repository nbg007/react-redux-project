import { http } from '../../../utils'
import * as types from './constant'

export function getMerchantInfo() {
    return dispatch => {
        http
            .get('merchant/getMerchantByEmployeeId')
            .then(res => {
                if (res.status === 200 && res.info.length > 0) {
                    dispatch({
                        type: types.GET_MERCHANT_INFO_SUCCESS,
                        merchantInfo: res.info
                    })
                } else {
                    dispatch({
                        type: types.GET_MERCHANT_INFO_FAILURE,
                        errMsg: res.errMsg
                    })
                }
            })
    }
}
