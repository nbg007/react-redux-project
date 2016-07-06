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
                    setStorage(res.info, username)
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

function setStorage(info, username) {
    const menuArr = info.menu.filter(item => item.directory === '业务员管理' || item.directory === '商户管理')
    const menu = menuArr.length > 1 ?
        menuArr.reduce((a, b) => a.subdirectory.concat(b.subdirectory)) :
        menuArr[0].subdirectory

    const userInfo = {
        userTypeCode: info.userTypeCode,
        menu,
        username
    }

    if (info.employee) {
        userInfo.employee = info.employee
    } else {
        delete userInfo.employee
    }

    localStorage.token = info.token
    localStorage.userInfo = JSON.stringify(userInfo)
}
