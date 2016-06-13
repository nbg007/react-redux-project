import * as types from './constant'

export default function (state = {}, action) {
    switch (action.type) {

        case types.GET_QCODE_SUCCESS:
            return Object.assign({}, state, {
                url: action.url
            })

        default:
            return state
    }
}
