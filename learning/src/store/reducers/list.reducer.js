import {FETCH_ROWS} from '../../actions/reducerConstants';

const defaultState = {
    rows: []
}
export default function listReducer(state = defaultState, action) {
    const {branch, type} = action;
    switch (type) {
        case `${branch}/${FETCH_ROWS}`:
            return {
                ...state,
                rows: action.payload
            }
        default:
            return state;
    }
}