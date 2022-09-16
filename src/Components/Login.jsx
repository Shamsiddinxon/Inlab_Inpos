import Button from "@mui/material/Button";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useToken from "../Hooks/useToken";
const Login = () => {
  const navigate = useNavigate();
  let [token, setToken] = useToken();
  const [userEmail, setUserEmail] = useState({
    value: "",
    status: false,
  });
  const [password, setPassword] = useState({
    value: "",
    status: false,
  });

  const Post = (e) => {
    e.preventDefault();
    setToken(userEmail.value);
    if (token !== "null" && token) {
      navigate("/cashier");
    }
  };

  const userEmailChangeHandler = (e) => {
    let update = { ...userEmail };
    update.value = e.target.value;
    update.status = false;
    setUserEmail(update);
  };
  const PasswordChangeHandler = (e) => {
    let update = { ...password };
    update.value = e.target.value;
    update.status = false;
    setPassword(update);
  };
  return (
    <div className="login">
      <div className="login__left">
        <form
          action=""
          onSubmit={(e) => {
            Post(e);
          }}
        >
          <h2 className="login__title">Welcome Back</h2>
          <div>
            <label htmlFor="login-email">Email</label>
            <input
              id="login-email"
              type="email"
              placeholder="Enter your email"
              required
              onChange={(e) => {
                userEmailChangeHandler(e);
              }}
            />
          </div>
          <div></div>
          <div>
            <label htmlFor="login-password">Password</label>
            <input
              id="login-password"
              type="password"
              placeholder="Enter your password"
              value={password.value}
              required
              onChange={(e) => {
                PasswordChangeHandler(e);
              }}
            />
          </div>

          <div className="forgot">
            <p className="link">Forgot password</p>
          </div>
          <Button
            style={{
              backgroundColor: "#8BC34A",
              color: "#fff",
              borderRadius: "8px",
              width: "100%",
              height: "43px",
              fontSize: "16px",
              textTransform: "unset",
            }}
            type="submit"
          >
            Sign in
          </Button>
          <p className="account">
            Don’t have an account? <p className="link"> Sign up</p>
          </p>
        </form>
      </div>

      <div className="login__right">
        <div className="login__right-box">
          <span className="doira"></span>
          <span className="hira"></span>
        </div>
      </div>

      {/* <div className="login__container container">
        <NavLink to="/" className="login__logo">
          <h1 className="m-0">Inpos</h1>
        </NavLink>

        <form className="login__form">
          <h1 className="login__form-title">Kirish</h1>
          <p className="login__form-txt">
            Akkauntingiz yo'qmi?{" "}
            <NavLink className="login__form-link" to="/register">
              Ro'yxatdan o'tish
            </NavLink>
          </p>
          <label className="login__label">
            <input
              className="login__input"
              value={userName.value}
              id="login-username"
              onChange={(e) => {
                userNameChangeHandler(e);
              }}
              type="text"
              name="login-username"
              placeholder="Username kiriting"
              minLength={3}
            />
            <span className="login__input-name">Username</span>
          </label>

          <label className="login__label">
            {password.status ? <></> : <></>}
            <input
              className="login__input"
              type="password"
              value={password.value}
              onChange={(e) => {
                PasswordChangeHandler(e);
              }}
              name="login-password"
              id="login-password"
              placeholder="Parol kiriting"
              minLength={password.status ? 50 : 3}
            />
            <span className="login__input-name">Parol</span>
          </label>

          <Button
            variant="contained"
            className="btn__txt bg-btnBg w-full px-2"
            onClick={(e) => {
              Post(e);
            }}
          >
            Davom etish
          </Button>
        </form>
      </div> */}
    </div>
  );
};
export default Login;
