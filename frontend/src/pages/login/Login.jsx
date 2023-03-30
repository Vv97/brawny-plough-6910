import styles from "./login.module.css";
import { FcGoogle } from "react-icons/fc";
import { GrFacebook } from "react-icons/gr";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../redux/auth/authapi";
import { useDispatch } from "react-redux";

const intialstate = {
  email: "",
  password: "",
};

export const Login = () => {
  const [show, setshow] = useState(false);
  const [users, setusers] = useState(intialstate);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // handle hide/show password
  function handleShow(val) {
    val.preventDefault();
    setshow((prev) => !prev);
  }

  // handle input data
  function handleChange(e) {
    const { name, value } = e.target;
    setusers((prev) => ({ ...prev, [name]: value }));
  }

  // handle form submitdata
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(login(users)).then((res) => {
      if (res) {
        navigate("/");
      }
    });
  }

  return (
    <div className={styles.login}>
      <div className={styles.loginWrapper}>
        <p>Login to CaratLane</p>
        <div className={styles.loginFG}>
          <div>
            <FcGoogle />
            <p>Google</p>
          </div>
          <div>
            <GrFacebook style={{ fill: "#3b5998" }} />
            <p>Facebook</p>
          </div>
        </div>

        <div className={styles.loginOR}>
          <span>OR</span>
        </div>

        <form className={styles.loginForm} onSubmit={handleSubmit}>
          <div>
            <label className={styles.loginEmailLabel}>Email</label>
            <input
              type="email"
              name="email"
              value={users.email}
              required
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Password</label>
            <div className={styles.loginShowpass}>
              <input
                type={show ? "text" : "password"}
                name="password"
                required
                value={users.password}
                onChange={handleChange}
              />
              <button onClick={handleShow}>{show ? "HIDE" : "SHOW"}</button>
            </div>
          </div>
          <input type="submit" value={"LOG IN"} className={styles.loginBtn} />
        </form>
        <div className={styles.loginOR}>
          <span>OR</span>
        </div>
        <div className={styles.loginLink}>
          New to precious? <Link>Create an Account</Link>
        </div>
      </div>
    </div>
  );
};
