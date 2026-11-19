import Link from "next/link";
import React, { useState, useEffect } from "react";
import User from "models/user.model";
import axios from "axios";
import { Formik, Form, Field, FieldAttributes, useField } from "formik";
import Yup from "yup";
import signUp from "../../services/auth/userSignUp";
import toast from "react-hot-toast";
import { useRouter } from "next/router";


// const SignupSchema = Yup.object().shape({
//   name: Yup.string()
//     .min(2, "Too Short!")
//     .max(50, "Too Long!")
//     .required("Required"),
//   familyName: Yup.string()
//     .min(2, "Too Short!")
//     .max(50, "Too Long!")
//     .required("Required"),
//   email: Yup.string().email("Invalid email").required("Required"),
//   password: Yup.string()
//     .required("Required")
//     .min(8, "Must be 8 characters or more")
//     .matches(/[a-z]+/, "One lowercase character")
//     .matches(/[A-Z]+/, "One uppercase character")
//     .matches(/[@$!%*#?&]+/, "One special character")
//     .matches(/\d+/, "One number"),
//     // confirmPassword: Yup.string()
//     //   .oneOf([Yup.ref("password"), null], "Password must match")
//     //   .required("Confirm password required"),
// });

const Signup = () => {
  const [credentials, setCredentials] = useState<User | any>({});
  const [user, setUser] = useState<User | any>({});
  const router = useRouter();

  return (
    <>
      <div className="d-flex align-items-center justify-content-center min-vh-100 px-3 py-4">
        <div className="col-lg-5 col-md-8 col-12" id="auth-left">
          <div className="card shadow p-5 sm-5 bg-white rounded ">
            <div className="auth-logo"> </div>

            <p className="auth-title h2 mx-auto">Sign up.</p>
            <p className="auth-subtitle mb-5 mx-auto">
              Please register using your credentials
            </p>
            <Formik
              initialValues={{
                name: "",
                familyName: "",
                email: "",
                password: "",
                confirmPassword: "",
              }}
              // validationSchema={SignupSchema}
              onSubmit={(values, { setSubmitting }) => {
                setSubmitting(true);
                signUp({
                  email: values.email,
                  password: values.password,
                  name: values.name,
                  familyName: values.familyName,
                })
                  .then(() => {
                    router.push({
                      pathname: "/auth/confirm",
                      query: { email: values.email },
                    });
                  })
                  .catch((err) => {
                    toast.error(err.message);
                    setSubmitting(false);
                  });
              }}
            >
              <Form>
                  <div className="form-group position-relative has-icon-left mb-4">
                    <Field
                      name="name"
                      type="text"
                      className="form-control form-control-xl"
                      placeholder="Name"
                      autoComplete="given-name"
                    />
                    <div className="form-control-icon">
                      <i className="bi bi-person"></i>
                    </div>
                  </div>
                  <div className="form-group position-relative has-icon-left mb-4">
                    <Field
                      name="familyName"
                      type="text"
                      className="form-control form-control-xl"
                      placeholder="Surname"
                      autoComplete="family-name"
                    />
                    <div className="form-control-icon">
                      <i className="bi bi-person"></i>
                    </div>
                  </div>
                  <div className="form-group position-relative has-icon-left mb-4">
                    <Field
                      name="email"
                      type="email"
                      placeholder="Email"
                      className="form-control form-control-xl"
                      autoComplete="email"
                    />
                    <div className="form-control-icon">
                      <i className="bi bi-person"></i>
                    </div>
                  </div>
                  <div className="form-group position-relative has-icon-left mb-4">
                  <Field
                      name="password"
                      type="password"
                      placeholder="Password"
                      className="form-control form-control-xl"
                      autoComplete="new-password"
                    />
                    <div className="form-control-icon">
                      <i className="bi bi-shield-lock"></i>
                    </div>
                  </div>
                  <div className="form-group position-relative has-icon-left mb-4">
                  <Field
                      name="confirmPassword"
                      type="password"
                      placeholder="Confirm Password"
                      className="form-control form-control-xl"
                      autoComplete="new-password"
                    />
                    <div className="form-control-icon">
                      <i className="bi bi-shield-lock"></i>
                    </div>
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

export default Signup;
