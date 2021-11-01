import {FETCH_ROWS} from '../../actions/reducerConstants';

export const fetchData = (rows, branch) => ({
    branch,
    type: `${branch}/${FETCH_ROWS}`,
    payload: rows
})