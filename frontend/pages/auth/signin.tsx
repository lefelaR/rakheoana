import Link from "next/link";
import React, { useState, useEffect } from "react";
import User from "models/user.model";
import axios from "axios";
import { Formik, Form, Field, FieldAttributes, useField } from "formik";
import toast,{Toaster} from "react-hot-toast";
import { useRouter } from "next/router";
import userSignIn from "@services/auth/userSignIn";
import useUserContext from 'hooks/useUser';

const Signin = () => {
  const router = useRouter();
  const {onUpdated: handleUserUpdate,currentUser,isLoading} = useUserContext();
  return (
    <div className="col-lg-5 col-12 px-5 mt-5">
      <div id="auth-left row ">
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
            onSubmit={(values, { resetForm, setSubmitting }) => {
              setSubmitting(true);
              userSignIn({ email: values.email, password: values.password })
                .then((res:any) => {
                  
                  toast.success("Sign in successful");
                  // handleUserUpdate().then(() => {
                  //   resetForm();
                  //   console.log("Done");
                    router.push("/dashboard/");
                  // });
                })
                .catch((err: any) => {
                  if (err.message === "User is not confirmed") {
                    toast.error(
                      "Your email is not verified, please check your email for a verification email from us."
                    );
                  } else if (
                    err.message === "handleUserUpdate is not a function" ||
                    err.message === "t is not a function"
                  ) {
                    toast.error(
                      "Unable to proceed, please contact Sam for assistance"
                    );
                  } else {
                    toast.error(err.message);
                  }
                  setSubmitting(false);
                });
            }}
          >
            {({ errors, touched, isSubmitting, handleBlur, handleChange }) => (
              <Form>
                <div className="form-group position-relative has-icon-left mb-4">
                  <Field
                    name="email"
                    type="input"
                    className="form-control form-control-xl"
                    margin="normal"
                    label="Email"
                    placeholder={"Email"}
                    fullWidth
                    error={!!errors.email && !!touched.email}
                    helperText={!!touched.email && errors.email}
                  />
                  <div className="form-control-icon">
                    <i className="bi bi-person"></i>
                  </div>
                </div>
                <div className="form-group position-relative has-icon-left mb-4">
                  <Field
                    name="password"
                    type="input"
                    className="form-control form-control-xl"
                    margin="normal"
                    placeholder={"Password"}
                    label="Password"
                    fullWidth
                    error={!!errors.password && !!touched.password}
                    helperText={!!touched.password && errors.password}
                  />
                  <div className="form-control-icon">
                    <i className="bi bi-person"></i>
                  </div>
                </div>
                <input
                  className="btn main-btn btn-primary btn-block shadow-lg mt-5"
                  type="submit"
                  name="submit"
                  value="Log in"
                />
              </Form>
            )}
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
  );
};

export default Signin;
