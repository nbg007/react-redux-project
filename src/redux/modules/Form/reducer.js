import * as types from './constant'

const initState = {}

export default (state = initState, action) => {
    switch (action.type) {

        case types.FORM_UPDATE_VALUE:
            return Object.assign({}, state, {
                [action.name]: action.value
            })

        case types.FORM_RESET:
            return initState

        default:
            return state
    }
}
