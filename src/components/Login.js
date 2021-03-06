/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../Styles/Login.css";
import { loginUrl } from "./spotify";

function Login() {
  return (
    <div className="login">
      <img
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="Spotify Logo"
      />
      {/* Login with Spotify Button */}
      <a href={loginUrl}>Login with Spotify</a>
    </div>
  );
}

export default Login;
