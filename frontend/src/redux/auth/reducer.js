import { getLocalData, setLocalData } from "../../utils/accesslocalstorage";
import * as types from "./actionTypes"

// auth state intialdata
const intialstate = {
    isAuth: getLocalData("isAuth") || false,
    token: getLocalData("token") || "",
    isError: false,
    isLoading: false
};


// auth reducer logic

export const reducer = (state = intialstate, { type, payload }) => {
    switch (type) {
        // register reducer
        case types.REGISTER_REQUEST:
            return { ...state, isLoading: true };
        case types.REGISTER_SUCCESS:
            return { ...state, isLoading: false };
        case types.REGISTER_FAILED:
            return { ...state, isLoading: false, isError: true };

        // login reducer

        case types.LOGIN_REQUEST:
            return { ...state, isLoading: true };
        case types.LOGIN_SUCCESS:
            setLocalData("isAuth", true)
            return { ...state, isLoading: true, token: payload, isAuth: true };
        case types.LOGIN_FAILED:
            return { ...state, isLoading: false, isError: true };

        // default state
        default:
            return state;
    };
};

