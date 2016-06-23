import * as types from './constant'

const initState = {
    openModal: false
}

export default function (state = initState, action) {
    switch (action.type) {

        case types.CLOSE_MODAL:
            return Object.assign({}, state, { openModal: false })

        case types.OPEN_MODAL:
            return Object.assign({}, state, { openModal: true })

        default:
            return state
    }
}
