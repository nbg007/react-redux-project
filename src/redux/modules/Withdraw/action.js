import * as types from './constant'
import { http } from '../../../utils'

export function getBank() {
    return dispatch => {
        http
            .get('bank/query')
            .then(res => {
                if (res.status === 200 && res.info.length) {
                    dispatch({
                        type: types.GET_BANK_SUCCESS,
                        bankInfo: res.info
                    })
                } else {
                    dispatch({
                        type: types.GET_BANK_FAILURE
                    })
                }
            })
    }
}

export function getLastBankAccount(accountId) {
    const path = 'bankAccount/getLastBankAccount'
    const query = {
        data: JSON.stringify({ accountId })
    }

    return dispatch => {
        http
            .get(path, query)
            .then(res => {
                if (res.status === 200) {
                    dispatch({
                        type: types.GET_LAST_SUCCESS,
                        lastBankInfo: res.info
                    })
                } else {
                    dispatch({
                        type: types.GET_LAST_FAILURE
                    })
                }
            })
    }
}
