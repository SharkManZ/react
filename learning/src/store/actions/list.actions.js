import {FETCH_ROWS, SET_SEARCH} from '../../actions/reducerConstants';

export const fetchData = (rows, branch) => ({
    branch,
    type: `${branch}/${FETCH_ROWS}`,
    payload: rows
})
export const setSearch = (search, branch) => ({
    branch,
    type: `${branch}/${SET_SEARCH}`,
    payload: search
})