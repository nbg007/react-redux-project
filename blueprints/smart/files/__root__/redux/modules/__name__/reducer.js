<<<<<<< HEAD
export const initialState = {};

export default function (state = initialState, action) {
    switch (action.type) {
        case 'condition':
            return state;
        default:
            return state;
=======
import * as types from './constant'

export default function (state = {}, action) {
    switch (action.type) {
        case 'condition':
            return state
        default:
            return state
>>>>>>> 40b89d3edaa758328c886e9511658c1ee5d15924
    }
}
