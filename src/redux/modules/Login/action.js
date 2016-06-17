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
                if (res.status === 200 && res.info) {
                    setStorage(res.info)
                    dispatch(LoginSuccess())
                } else {
                    dispatch(loginFailure('用户名或密码不正确'))
                }
            })
            .catch(err => dispatch(loginFailure(err)))
    }
}

function loginFailure(err) {
    return {
        type: types.LOGIN_FAILURE,
        err
    }
}

function LoginSuccess() {
    return {
        type: types.LOGIN_SUCCESS
    }
}

function setStorage(info) {
    const userInfo = {
        userTypeCode: info.userTypeCode,
        menu: info.menu && info.menu[0].subdirectory
    }

    if (info.employee) {
        userInfo.employee = info.employee
    } else {
        delete userInfo.employee
    }

    localStorage.token = info.token
    localStorage.userInfo = JSON.stringify(userInfo)
}
