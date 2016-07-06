import { http } from '../../../utils'
import * as types from './constant'

export function getOrder() {
    const userTypeCode = JSON.parse(localStorage.userInfo).userTypeCode
    const path = userTypeCode === 'merchant' ? 'salesOrder/findSalesOrderByMerchant' : 'salesOrder/findSalesOrderBySalesman'

    return dispatch => {
        http
            .get(path)
            .then(res => {
                if (res.status === 200) {
                    dispatch({
                        type: types.GET_ORDER_SUCCESS,
                        orderInfo: res.info
                    })
                }
            })
    }
}
