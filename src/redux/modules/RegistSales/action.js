import { http } from '../../../utils'
import * as types from './constant'

export function getSalesmanType() {
    return dispatch => {
            http
                .get('businessType/getSalesmanRelationTypeList', { businessBodyFlag: 1 })
                .then(res => {
                    if (res.status === 200 && res.info.length) {
                        dispatch({
                            type: types.GET_SALESMAN_TYPE_SUCCESS,
                            salesmanType: res.info
                        })
                    } else {
                        dispatch({
                            type: types.GET_SALESMAN_TYPE_FAILURE,
                            errMsg: res.errMsg
                        })
                    }
                })
        }
}

export function registSalesman(payload) {
    return dispatch => {
            http
                .post('salesmanRelation/registSalesmanRelation', undefined, payload)
                .then(res => {
                    if (res.status === 200 && res.info) {
                        dispatch({
                            type: types.REGIST_SALESMAN_TYPE_SUCCESS,
                            registStatus: !!res.info
                        })
                    } else {
                        dispatch({
                            type: types.REGIST_SALESMAN_TYPE_FAILURE,
                            errMsg: res.errMsg
                        })
                    }
                })
        }
}

export function initRegistStatus() {
    return {
        type: types.INIT_REGIST_STATUS
    }
}
