import React from "react";
import "./SignInScreen.css";

function SignInScreen() {
  const register = (e) => {
    e.preventDefault();
    // console.log("Register");
  };

  const signIn = (e) => {
    e.preventDefault();
    // console.log("signIn");
  };

  return (
    <div className="SignInScreen">
      <form>
        <h1>Sign In</h1>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit" onClick={signIn}>
          Sign In
        </button>
        <h4>
          <span className="SignInScreen_grey">New to Netflix?</span>

          <span className="SignInScreen_link" onClick={register}>
            Sign up now.
          </span>
        </h4>
      </form>
    </div>
  );
}

export default SignInScreen;
