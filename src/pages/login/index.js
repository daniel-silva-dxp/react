import React from "react";
import { TiHeartHalfOutline } from "react-icons/ti";
import Button from "../../components/button";
import Input from "../../components/input";

import "./main.css";

const Loginpage = ({
  email,
  setEmail,
  password,
  setPassword,
  handleLogin,
  handleSignup,
  hasAccount,
  setHasAccount,
  emailError,
  passwordError,
}) => {
  return (
    <section className="container">
      <div className="content display-flex align-items-center justify-content-center flex-direction-column">
        <div className="login display-flex align-items-center justify-content-center flex-direction-column">
          <div className="logo display-flex align-items-center justify-content-center">
            <TiHeartHalfOutline />
          </div>
          <h1>Welcome to Health Track</h1>
          <p>Login in to your account</p>

          <form action="">
            <Input
              type="email"
              name="email"
              placeholder="name@email.com"
              required
              autoComplete="of"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={emailError}
            >
              Email
            </Input>
            <Input
              type="password"
              name="password"
              placeholder="Enter your Password"
              required
              autoComplete="of"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={passwordError}
            >
              Password
            </Input>
            <div>
              {hasAccount ? (
                <>
                  <Button
                    method="button"
                    className="btn btn-large btn-default"
                    onClick={handleLogin}
                  >
                    Sing in
                  </Button>
                  <p className="text-align-right">
                    Don't have an account?
                    <span
                      className="has-account"
                      onClick={() => setHasAccount(!hasAccount)}
                    >
                      Sign up
                    </span>
                  </p>
                </>
              ) : (
                <>
                  <Button
                    method="button"
                    className="btn btn-large btn-default"
                    onClick={handleSignup}
                  >
                    Sing up
                  </Button>
                  <p className="text-align-right">
                    Have an account?
                    <span
                      className="has-account"
                      onClick={() => setHasAccount(!hasAccount)}
                    >
                      Sign in
                    </span>
                  </p>
                </>
              )}
            </div>

            <p className="text-align-center">---------- OU ----------</p>
            <Button method="button" className="btn btn-large btn-red">
              Google
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Loginpage;
