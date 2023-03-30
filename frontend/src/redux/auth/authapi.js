import axios from "axios"
import { toast } from "react-toastify";
import { setLocalData } from "../../utils/accesslocalstorage";
import { loginFailed, loginRequest, loginSuccess, registerFailed, registerRequest, registerSuccess } from "./action"


// register
export const register = (data) => (dispatch) => {
    // here making request to the server
    dispatch(registerRequest());
    return axios.post(" http://localhost:8080/user/register", data)
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
    return axios.post("http://localhost:8080/user/login", data)
        .then(res => {
            toast.success(res.data.mssg);
            setLocalData("token", res.data.token);
            dispatch(loginSuccess(res.data.token));
            return true
        }).catch(error => {
            toast.error(error.response.data.mssg);
            dispatch(loginFailed());
            return false
        });
};