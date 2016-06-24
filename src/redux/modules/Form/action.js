import * as types from './constant'

export function update(name, value) {
    return {
        type: types.FORM_UPDATE_VALUE,
        name,
        value
    }
}

export function reset() {
    return {
        type: types.FORM_RESET
    }
}
