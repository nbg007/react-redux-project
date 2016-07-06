import { http } from '../../../utils'
import * as types from './constant'

export function getAccount() {
    return dispatch => {
        http
            .get('account/getAccount')
            .then(res => {
                if (res.status === 200 && res.info) {
                    dispatch({
                        type: types.GET_ACCOUNT_SUCCESS,
                        info: res.info
                    })
                } else {
                    dispatch({
                        type: types.GET_ACCOUNT_FAILURE
                    })
                }
            })
    }
}
