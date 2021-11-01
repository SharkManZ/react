import {FETCH_ROWS, SET_SEARCH} from '../../actions/reducerConstants';

const defaultState = {
    rows: [],
    search: ''
}
export default function listReducer(state = defaultState, action) {
    const {branch, type} = action;
    switch (type) {
        case `${branch}/${FETCH_ROWS}`:
            return {
                ...state,
                rows: action.payload
            }
        case `${branch}/${SET_SEARCH}`:
            return {
                ...state,
                search: action.payload
            }
        default:
            return state;
    }
}