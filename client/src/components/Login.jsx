import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { userLogin } from "../JS/userSlice/userSlice";
import './lol.css'
const Login = () => {
  const [login, setlogin] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const isAuth = localStorage.getItem("token");
  let navigate = useNavigate();

  return (
    <div>
      <div className="wrapper">
        <form onSubmit={(e) => e.preventDefault()} className="form-signin">
          <h2 className="form-signin-heading">Please login</h2>
          <input
            type="text"
            className="form-control"
            name="username"
            placeholder="Email Address"
            required=""
            autofocus=""
            onChange={(e) => setlogin({ ...login, email: e.target.value })}
          />
          <input
            type="password"
            className="form-control"
            name="password"
            placeholder="Password"
            required=""
            onChange={(e) => setlogin({ ...login, password: e.target.value })}
          />
          <label className="checkbox">
            <input
              type="checkbox"
              value="remember-me"
              id="rememberMe"
              name="rememberMe"
            />{" "}
            Remember me
          </label>
          <button
            className="btn btn-lg btn-primary btn-block"
            onClick={() => {
              dispatch(userLogin(login));
              setTimeout(() => {
                navigate("/profil");
              }, 1000);
              setTimeout(() => {
                window.location.reload();
              }, 1000);
            }}
          >
            Login
          </button>
          u already have account <Link to="/">Register now </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
