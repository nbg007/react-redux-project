import * as types from './constant'

export default function (state = {}, action) {
    switch (action.type) {

        case types.YOUR_CONSTANT:
            return state

        default:
            return state
    }
}
