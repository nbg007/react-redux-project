import { http } from '../../../utils'
import * as types from './constant'

export function getMerchantType() {
    return dispatch => {
            http
                .get('businessType/getMerchantTypeList', { enabled: 1 })
                .then(res => {
                    if (res.status === 200 && res.info.length) {
                        dispatch({
                            type: types.GET_MERCHANT_TYPE_SUCCESS,
                            merchantType: res.info
                        })
                    } else {
                        dispatch({
                            type: types.GET_MERCHANT_TYPE_FAILURE,
                            errMsg: res.errMsg
                        })
                    }
                })
        }
}

export function registMerchant(payload) {
    return dispatch => {
            http
                .post('merchant/registMerchant', undefined, payload)
                .then(res => {
                    if (res.status === 200 && res.info) {
                        dispatch({
                            type: types.REGIST_MERCHANT_SUCCESS,
                            registStatus: !!res.info
                        })
                    } else {
                        dispatch({
                            type: types.REGIST_MERCHANT_FAILURE,
                            errMsg: res.errMsg
                        })
                    }
                })
        }
}

export function initRegistMerchantStatus() {
    return {
        type: types.INIT_REGIST_MERCHANT_STATUS
    }
}
