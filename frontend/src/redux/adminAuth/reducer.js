import { getLocalData, setLocalData } from "../../utils/accesslocalstorage";
import * as types from "./actionTypes";

const initState = {
  isAuth: getLocalData("isAuth") || false,
  token: getLocalData("token") || "",
  isError: false,
  isLoading: false,
};

let loginToken = JSON.parse(localStorage.getItem("token"));
console.log(token);

export const adminReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case types.LOGIN_REQUEST: {
      return { ...state, isLoading: true };
    }
    case types.LOGIN_SUCCESS: {
      setLocalData("isAuth", true);
      return { ...state, isLoading: false, token: payload, isAuth: true };
    }
    case types.LOGIN_FAILED: {
      return { ...state, isLoading: false, isError: true };
    }
    default: {
      return state;
    }
  }
};
