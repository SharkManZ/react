import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import listReducer from "./reducers/list.reducer";

function branchReducer(reducerFunction, name) {
    return (state, action) => {
        const {branch} = action;

        if (branch !== name && state !== undefined) {
            return state;
        }

        return reducerFunction(state, action);
    }
}

const rootReducer = combineReducers({
    first: branchReducer(listReducer, 'first'),
    second: branchReducer(listReducer, 'second')
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));