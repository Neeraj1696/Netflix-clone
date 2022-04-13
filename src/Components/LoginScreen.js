import React, { useState } from "react";
import "./LoginScreen.css";
import SignInScreen from "./SignInScreen";
function LoginScreen() {
  const [signIn, setSignin] = useState(false);
  return (
    <div className="LoginScreen">
      <div className="loginscreen_background">
        <img
          className="loginscreen_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt="ERROR image"
        />

        <button onClick={() => setSignin(true)} className="loginScreen_button">
          Sign in
        </button>
        <div className="loginScreen_gradient">
          <img
            className="loginScreen_image"
            src="https://images.ctfassets.net/7so8go2zrvbw/2cPBaJIBwmXKiPFmORaRlw/1288322d48e889c11a40b615899230ee/0af6ce3e-b27a-4722-a5f0-e32af4df3045_what_is_netflix_5_en.png?w=800&h=450&q=95&fm=png"
            alt="ERROR-background"
          />
        </div>
        <div className="loginScreen_body">
          {signIn ? (
            <SignInScreen />
          ) : (
            <>
              <h4>Welcome back!</h4>
              <h1>Unlimited movies, TV shows and more.</h1>
              <h2>Watch anywhere. Cancel anytime.</h2>
              <div className="loginScreen_input">
                <form>
                  <input type="email" placeholder="Email Address" />
                  <button
                    onClick={() => setSignin(true)}
                    className="loginScreen_getStarted"
                  >
                    GET STARTED
                  </button>
                </form>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;
