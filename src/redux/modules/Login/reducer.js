import * as types from './constant'

export default function login(state = {}, action) {
    switch (action.type) {
        case types.LOGIN_SUCCESS:
            return Object.assign({}, state, {
                info: action.info
            })
        default:
            return state
    }
}
