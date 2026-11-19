import Link from "next/link";
import React, { useState, useEffect } from "react";
import User from "models/user.model";
import axios from "axios";
import { Formik, Form, Field, FieldAttributes, useField } from "formik";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/router";
import userSignIn from "@services/auth/userSignIn";
import useUserContext from 'hooks/useUser';
import PasswordField from "@components/molecules/PasswordField";

const signInFailureMessage = (error: { message?: string } | null) => {
  if (error?.message === "User is not confirmed") {
    return "Your email is not verified. Check your inbox for a verification email.";
  }

  return "Sign in failed. Check your email and password and try again.";
};

const Signin = () => {
  const router = useRouter();
  const {onUpdated: handleUserUpdate,currentUser,isLoading} = useUserContext();
  return (
    <>
    <Toaster position="bottom-left" />
    <div className="d-flex align-items-center justify-content-center min-vh-100 px-3">
      <div className="col-lg-5 col-md-8 col-12" id="auth-left">
        <div className="card shadow p-5 sm-5 bg-white rounded ">
          <div className="auth-logo"> </div>
          <p className="auth-title h2 mx-auto">Log in.</p>
          <p className="auth-subtitle mb-5 mx-auto">
            Log in with credentials that you entered during registration.
          </p>

          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            onSubmit={(values, { setSubmitting }) => {
              setSubmitting(true);
              userSignIn({ email: values.email, password: values.password })
                .then(() => {
                  router.push("/dashboard/");
                })
                .catch((err: { message?: string }) => {
                  toast.error(signInFailureMessage(err));
                  setSubmitting(false);
                });
            }}
          >
            <Form>
                <div className="form-group position-relative has-icon-left mb-4">
                  <Field
                    name="email"
                    type="email"
                    className="form-control form-control-xl"
                    placeholder="Email"
                    autoComplete="email"
                  />
                  <div className="form-control-icon">
                    <i className="bi bi-person"></i>
                  </div>
                </div>
                <div className="form-group mb-4">
                  <PasswordField
                    name="password"
                    className="form-control form-control-xl"
                    placeholder="Password"
                  />
                </div>
                <input
                  className="btn main-btn btn-primary btn-block shadow-lg mt-5"
                  type="submit"
                  name="submit"
                  value="Log in"
                />
            </Form>
          </Formik>

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
    </>
  );
};

export default Signin;
