import * as types from "./actionTypes";

// admin login action

export const loginRequest = () => {
    return { type: types.LOGIN_REQUEST };
};

export const loginSuccess = (payload) => {
    return { type: types.LOGIN_SUCCESS, payload };
};

export const loginFailed = () => {
    return { type: types.LOGIN_FAILED };
};