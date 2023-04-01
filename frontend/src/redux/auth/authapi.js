import axios from "axios"
import { toast } from "react-toastify";
import { setLocalData } from "../../utils/accesslocalstorage"
import { loginFailed, loginRequest, loginSuccess, registerFailed, registerRequest, registerSuccess } from "./action"


// register
export const register = (data) => (dispatch) => {
    // here making request to the server
    dispatch(registerRequest());
    return axios.post(process.env.REACT_APP_REGISTER_URL, data)
        .then(res => {
            toast.success(res.data.mssg);
            dispatch(registerSuccess());
            return true
        })
        .catch((error) => {
            toast.error(error.response.data.mssg);
            dispatch(registerFailed())
            return false
        });
};



// login 
export const login = (data) => (dispatch) => {
    dispatch(loginRequest());
    return axios.post(process.env.REACT_APP_LOGIN_URL, data)
        .then(res => {
            toast.success(res.data.mssg);
            setLocalData("token", res.data.token);
            setLocalData("userDetails", res.data.userdata);
            dispatch(loginSuccess(res.data.token));
            return true
        }).catch(error => {
            toast.error(error.response.data.mssg);
            dispatch(loginFailed());
            return false
        });
};

// logout 
export const logout = () => {
    setLocalData("isAuth", false);
    localStorage.removeItem("token")
}