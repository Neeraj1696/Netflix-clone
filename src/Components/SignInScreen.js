import React, { useRef } from "react";

import "./SignInScreen.css";

function SignInScreen() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const signIn = (e) => {
    e.preventDefault();
    console.log("signIn");
  };

  return (
    <div className="SignInScreen">
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} type="email" placeholder="Email" />
        <input ref={passwordRef} type="password" placeholder="Password" />
        <button type="submit" onClick={signIn}>
          Sign In
        </button>
        <h4>
          <span className="SignInScreen_grey">New to Netflix?</span>

          <span className="SignInScreen_link">Sign up now.</span>
        </h4>
      </form>
    </div>
  );
}

export default SignInScreen;
