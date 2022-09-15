import Button from "@mui/material/Button";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import SelectRole from "./selectRole";
import useToken from "../Hooks/useToken";
// import SendMessage from "./sendMessage";
// import SendPhone from "./sendPhone";
// import { AlertWarning } from "../Alert";
// import axios from "../../axios";
// import SelectRole from './selectRole'
// import {useRouter} from 'next/router'
// import Link from 'react-router-dom'
const Login = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);
  let [token, setToken] = useToken();
  const [userName, setUserName] = useState({
    value: "",
    status: false,
  });
  const [password, setPassword] = useState({
    value: "",
    status: false,
  });
  const [userRole, setUserRole] = useState({
    value: "",
    status: false,
  });

  const Post = (e) => {
    e.preventDefault();
    setToken(userName.value);
    console.log(userName, token);
    if (token !== "null" && token) {
      navigate("/cashier");
    }
    // return <Navigate to="/" />;
    // axios
    //   .post("/api/users/login", { username: userName.value, password: password.value })
    //   .then((res) => {

    //   setToken(res.data.data.token)
    //   setIsCountinuingOn(false);
    //   setIsLogin(false)
    //   setDanger("good");
    //   setErrorDetails(res.data.message);

    //   })
    //   .catch((err) => {
    //     let update = {...password}
    //     setDanger("bad");
    //     setStart(true);
    //     setErrorDetails(err.response.data.message);
    //     update.status = true
    //     setIsCountinuingOn(false);
    //     setPassword(update)
    //     console.log(err);
    //   });
    // }
  };

  const userRoleChangeHandler = (e) => {
    let update = { ...userRole };
    update.value = e;
    setUserRole(update);
    setIsLogin(true);
  };

  const userNameChangeHandler = (e) => {
    let update = { ...userName };
    update.value = e.target.value;
    update.status = false;
    setUserName(update);
  };
  const PasswordChangeHandler = (e) => {
    let update = { ...password };
    update.value = e.target.value;
    update.status = false;
    setPassword(update);
  };
  return (
    <div className="login">
      <div className="login__container container">
        <NavLink to="/" className="login__logo">
          <h1 className="m-0">Inpos</h1>
        </NavLink>
        {isLogin ? (
          <>
            <form className="login__form">
              <h1 className="login__form-title">Kirish</h1>
              <p className="login__form-txt">
                Akkauntingiz yo'qmi?{" "}
                <NavLink className="login__form-link" to="/register">
                  Ro'yxatdan o'tish
                </NavLink>
              </p>
              <label className="login__label">
                {/* <span className="login__message">Bunday username olingan</span> */}
                <input
                  className="login__input"
                  value={userName.value}
                  onChange={(e) => {
                    userNameChangeHandler(e);
                  }}
                  type="text"
                  name="login-username"
                  id="login-username"
                  placeholder="Username kiriting"
                  minLength={3}
                />
                <span className="login__input-name">Username</span>
              </label>

              <label className="login__label">
                {password.status ? (
                  <>
                    {/* <span className="login__message">Username yoki parol xato terildi</span> */}
                  </>
                ) : (
                  <></>
                )}
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
                // onClick={(e) => {
                //   Post(e), setIsCountinuingOn(true);
                //   setTimeout(() => {
                //     setStart(false);
                //   }, 5500);
                // }}
                // disabled={button}
              >
                Davom etish
              </Button>
            </form>
          </>
        ) : (
          <>
            <SelectRole userRoleChangeHandler={userRoleChangeHandler} />
          </>
        )}
      </div>
    </div>
  );
};
export default Login;
