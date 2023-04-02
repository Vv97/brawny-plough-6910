import axios from "axios"
import { toast } from "react-toastify";
import { setLocalData } from "../../utils/accesslocalstorage"
import { loginFailed, loginRequest, loginSuccess } from "./action";

export const adminLogin = (data) => (dispatch) => {
    dispatch(loginRequest());
    return axios.post(process.env.REACT_APP_LOGIN_URL, data)
        .then(res => {
            // window.alert("login success")
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
export const adminLogout = () => {
    setLocalData("isAuth", false);
    localStorage.removeItem("token")
}