import { http } from '../../../utils'
import * as types from './constant'

export function salesmanInfo() {
    return dispatch => {
        http
            .get('salesmanRelation/getChildSalesmanRelations')
            .then(res => {
                if (res.status === 200 && res.info.length > 0) {
                    dispatch({
                        type: types.GET_SALESMAN_INFO_SUCCESS,
                        salesmanInfo: res.info
                    })
                } else {
                    dispatch({
                        type: types.GET_SALESMAN_INFO_FAILURE,
                        errMsg: res.errMsg
                    })
                }
            })
    }
}
