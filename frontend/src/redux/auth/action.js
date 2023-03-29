import * as types from "./actionTypes";

// register actions

export const registerRequest = () => {
    return { type: types.REGISTER_REQUEST };
};

export const registerSuccess = () => {
    return { type: types.REGISTER_SUCCESS };
};

export const registerFailed = () => {
    return { type: types.REGISTER_FAILED };
};


// login action

export const loginRequest = () => {
    return { type: types.LOGIN_REQUEST };
};

export const loginSuccess = (payload) => {
    return { type: types.LOGIN_SUCCESS, payload };
};

export const loginFailed = () => {
    return { type: types.LOGIN_FAILED };
};
