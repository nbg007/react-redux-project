import * as types from './constant'

export default function login(state = {}, action) {
    switch (action.type) {

        case types.LOGIN_SUCCESS:
            return Object.assign({}, state, {
                loginIn: true,
                err: null
            })

        case types.LOGIN_FAILURE:
            return Object.assign({}, state, {
                loginIn: false,
                err: action.err
            })

        default:
            return state
    }
}
