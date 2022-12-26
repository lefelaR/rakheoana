import Link from "next/link";
import React, { useState, useEffect } from "react";
import User from "models/user.model";
import axios from "axios";


const Signin = () => {
  const [credentials, setCredentials] = useState<User | any>({});
  const [user, setUser] = useState<User | any>({});

  const handleSubmit = (event: any) => {
    const { target: input } = event;
    const tmpUser = { ...user };
    tmpUser[user.name] = input.value;
    setUser(tmpUser);
  };


  return (
    <div className="col-lg-5 col-12 px-5 mt-5">
      <div id="auth-left row ">
        <div className="card shadow p-5 sm-5 bg-white rounded ">
          <div className="auth-logo"> </div>

          <p className="auth-title h2 mx-auto">Log in.</p>
          <p className="auth-subtitle mb-5 mx-auto">
            Log in with your data that you entered during registration.
          </p>

          <form id="login-form" onSubmit={handleSubmit}>
            <div className="form-group position-relative has-icon-left mb-4">
              <input
                type="text"
                className="form-control form-control-xl"
                name="username"
                placeholder="Username"
              />
              <div className="form-control-icon">
                <i className="bi bi-person"></i>
              </div>
            </div>
            <div className="form-group position-relative has-icon-left mb-4">
              <input
                type="password"
                className="form-control form-control-xl"
                name="password"
                placeholder="Password"
              />
              <div className="form-control-icon">
                <i className="bi bi-shield-lock"></i>
              </div>
            </div>
            <div className="form-check form-check-lg d-flex align-items-end">
              <input
                className="form-check-input me-2"
                name="flexcheck"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label text-gray-600">
                Keep me logged in
              </label>
            </div>
            <input
              className="btn main-btn btn-primary btn-block shadow-lg mt-5"
              type="submit"
              name="submit"
              value="Log in"
            />
          </form>
          <div className="text-center mt-5 font-weight-smaller">
            <p className="text-gray-600">
              Don&apos;t have an account?{" "}
              <a href="signup" className="font-bold">
                Sign up
              </a>
            </p>
            <p>
              <Link className="font-bold" href="/auth/forgotpassword">
                Forgot password?
              </Link>
              |
              <Link className="font-bold" href="/">
                home
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
