import * as types from './constant'
import { md5, http } from '../../../utils'

export function loginUser(username, password) {
    return dispatch => {
        http
            .post('login', undefined, {
                username,
                password: md5(password)
            })
            .then(res => {
                if (res.status === 200) {
                    dispatch(LoginSuccess(res))
                } else {
                    dispatch(LoginRequest())
                }
            })
            .catch(err => dispatch(LoginRequest(err)))
    }
}

function LoginRequest() {
    return {
        type: types.LOGIN_FAILURE,
        err
    }
}

function LoginSuccess(info) {
    return {
        type: types.LOGIN_SUCCESS,
        info
    }
}
