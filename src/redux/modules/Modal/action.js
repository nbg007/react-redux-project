import * as types from './constant'

export function closeModal() {
    return {
        type: types.CLOSE_MODAL
    }
}

export function openModal() {
    return {
        type: types.OPEN_MODAL
    }
}
