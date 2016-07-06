import * as types from './constant'

const initState = {

}

export default function (state = initState, action) {
    switch (action.type) {

        case types.YOUR_CONSTANT:
            return Object.assign({}, state, {
                info: action.info
            })

        default:
            return state
    }
}
