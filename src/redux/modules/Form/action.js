import * as types from './constant'

export function update(name, value, formName) {
    return {
        type: types.FORM_UPDATE_VALUE,
        name,
        value,
        formName
    }
}

export function reset() {
    return {
        type: types.FORM_RESET
    }
}
