import React from "react";
import "./LoginScreen.css";
function LoginScreen() {
  return (
    <div className="LoginScreen">
      <div className="loginscreen_background">
        <img
          className="loginscreen_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt="ERROR image"
        />

        <button className="loginScreen_button">Sign in</button>
        <div className="loginScreen_gradient"></div>
      </div>
    </div>
  );
}

export default LoginScreen;
