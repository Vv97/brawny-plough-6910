import React, { useState } from "react";
import styles from "./register.module.css";
import { FcGoogle } from "react-icons/fc";
import { GrFacebook } from "react-icons/gr";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../../redux/auth/authapi";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const intialstate = {
  isd: 91,
  mobileNumber: "",
  email: "",
  firstname: "",
  lastname: "",
  password: "",
  confirmPassword: "",
  gender: "male",
};

export const Register = () => {
  const [show, setshow] = useState(true);
  const [show1, setshow1] = useState(true);
  const [user, setuser] = useState(intialstate);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleShow(val) {
    val.preventDefault();
    setshow((prev) => !prev);
  }

  function handleShow1(val) {
    val.preventDefault();
    setshow1((prev) => !prev);
  }

  function handleChange(val) {
    val.preventDefault();
    const { name, value } = val.target;
    setuser((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(val) {
    val.preventDefault();
    const {
      email,
      password,
      mobileNumber,
      isd,
      firstname,
      lastname,
      confirmPassword,
      gender,
    } = user;
    let mn = +(isd + mobileNumber);
    let obj = {
      email,
      password,
      confirmPassword,
      firstname,
      lastname,
      gender,
      mobileNumber: mn,
    };
    dispatch(register(obj)).then((res) => {
      if (res) {
        navigate("/login");
      }
    });
  }

  return (
    <div className={styles.Register}>
      <div className={styles.registerWrapper}>
        <div className={styles.loginByFG}>
          <p className={styles.registerHeading}>Sign Up with CaratLane</p>
          <div className={styles.underline}></div>
          <div>
            <div>
              <FcGoogle />
              <p>Google</p>
            </div>
            <div>
              <GrFacebook style={{ fill: "#3b5998" }} />
              <p>Facebook</p>
            </div>
          </div>
        </div>
        <div className={styles.registerOr}>
          <span>OR</span>
        </div>
        {/* register form */}
        <form className={styles.registerForm} onSubmit={handleSubmit}>
          <div className={styles.registerPhoneNumber}>
            <div className={styles.registerIsd}>
              <label>ISD</label>
              <input
                type="text"
                maxLength={2}
                name="isd"
                value={user.isd}
                required
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="">Mobile number</label>
              <input
                name="mobileNumber"
                value={user.mobileNumber}
                required
                onChange={handleChange}
                type="text"
              />
            </div>
          </div>
          <div>
            <label>Enter Email</label>
            <input
              type="email"
              required
              name="email"
              value={user.email}
              onChange={handleChange}
            />
          </div>
          <div className={styles.registername}>
            <div>
              <label htmlFor="">First Name</label>
              <input
                type="text"
                required
                name="firstname"
                value={user.firstname}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="">Last Name</label>
              <input
                type="text"
                required
                name="lastname"
                value={user.lastname}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className={styles.registerpassword}>
            <label htmlFor="">Password</label>
            <div className={styles.registerpasswordShow}>
              <input
                type={show ? "password" : "text"}
                required
                name="password"
                value={user.password}
                onChange={handleChange}
              />
              <button onClick={handleShow}>{show ? "SHOW" : "HIDE"}</button>
            </div>
          </div>
          <div className={styles.registerpassword}>
            <label htmlFor="">Confirm Password</label>
            <div className={styles.registerpasswordShow}>
              <input
                type={show1 ? "password" : "text"}
                required
                name="confirmPassword"
                value={user.confirmPassword}
                onChange={handleChange}
              />
              <button onClick={handleShow1}>{show1 ? "SHOW" : "HIDE"}</button>
            </div>
          </div>

          <div className={styles.registerGender} onChange={handleChange}>
            <div>
              <input
                type="radio"
                name="gender"
                value="male"
                defaultChecked
                className={styles.registerradio}
                // onChange={handleChange}
              />
              <label>male</label>
            </div>
            <div>
              <input
                type="radio"
                name="gender"
                value="female"
                className={styles.registerradio}
              />
              <label>female</label>
            </div>
            <div>
              <input
                type="radio"
                name="gender"
                value="i don’t want to specify"
                className={styles.registerradio}
                // onChange={handleChange}
              />
              <label> i don’t want to specify</label>
            </div>
          </div>

          <input
            type="submit"
            style={{ borderRadius: "8px" }}
            value="REGISTER TO CONTINUE"
            className={styles.registerBtn}
          />
        </form>
        <div className={styles.registerLoginLink}>
          Already have an account? <Link>LOG IN</Link>
        </div>
      </div>
    </div>
  );
};
