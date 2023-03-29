import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import { reducer as authReducer } from "./auth/reducer";
import thunk from "redux-thunk"

// combine all the reducer
const mainReducer = combineReducers({ authReducer });

// redux store
export const store = legacy_createStore(mainReducer, applyMiddleware(thunk));