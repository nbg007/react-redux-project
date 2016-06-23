import { http } from '../../../utils'
import * as types from './constant'

export function getQcode() {
    const userTypeCode = JSON.parse(localStorage.userInfo).userTypeCode
    const path = userTypeCode === 'merchant' ? 'qCode/getCarPackgeUrlForMerchant' : 'qCode/getCarPackgeUrl'

    return dispatch => {
        http
            .get(path)
            .then(res => {
                if (res.status === 200) {
                    dispatch({
                        type: types.GET_QCODE_SUCCESS,
                        url: res.info
                    })
                }
            })
    }
}
