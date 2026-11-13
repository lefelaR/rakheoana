import Link from "next/link";
import React, { useState, useEffect } from "react";
import User from "models/user.model";
import axios from "axios";
import { Formik, Form, Field, FieldAttributes, useField } from "formik";
import Yup from "yup";
import signUp from "../../services/auth/userSignUp";
import toast from "react-hot-toast";
import { addUser } from "services/usersService";
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
      <div className="col-lg-5 col-12 px-5 mt-5">
        <div id="auth-left row ">
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
              onSubmit={(values, { resetForm, setSubmitting }) => {
                setSubmitting(true);
                addUser(values)
                  .then(() => {
                    toast.success("Successfully sighned up");
                    resetForm();
                    router.push("/signin");
                  })
                  .catch((err) => {
                    toast.error(err.message);
                    resetForm();
                  });
              }}
            >
              {({
                errors,
                touched,
                isSubmitting,
                handleBlur,
                handleChange,
              }) => (
                <Form>
                  <div className="form-group position-relative has-icon-left mb-4">
                    <Field
                      name="name"
                      type="input"
                      className="form-control form-control-xl"
                      margin="normal"
                      label="Name"
                      placeholder={"Name"}
                      fullWidth
                      error={!!errors.name && !!touched.name}
                      helperText={!!touched.name && errors.name}
                    />
                    <div className="form-control-icon">
                      <i className="bi bi-person"></i>
                    </div>
                  </div>
                  <div className="form-group position-relative has-icon-left mb-4">
                    <Field
                      name="familyName"
                      type="input"
                      className="form-control form-control-xl"
                      margin="normal"
                      placeholder={"Surname"}
                      label="Surname"
                      fullWidth
                      error={!!errors.familyName && !!touched.familyName}
                      helperText={!!touched.familyName && errors.familyName}
                    />
                    <div className="form-control-icon">
                      <i className="bi bi-person"></i>
                    </div>
                  </div>
                  <div className="form-group position-relative has-icon-left mb-4">
                    <Field
                      name="email"
                      type="input"
                      margin="normal"
                      placeholder={"Email"}
                      className="form-control form-control-xl"
                      label="Email"
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
                      placeholder={"Password"}
                      margin="normal"
                      className="form-control form-control-xl"
                      label="Password"
                      fullWidth
                      error={!!errors.password && !!touched.password}
                      helperText={!!touched.password && errors.password}
                    />
                    <div className="form-control-icon">
                      <i className="bi bi-shield-lock"></i>
                    </div>
                  </div>
                  <div className="form-group position-relative has-icon-left mb-4">
                  <Field
                      name="confirmPassword"
                      type="input"
                      placeholder={"Confirm Password"}
                      margin="normal"
                      className="form-control form-control-xl"
                      label="Confirm Password"
                      fullWidth
                      error={!!errors.confirmPassword && !!touched.confirmPassword}
                      helperText={!!touched.confirmPassword && errors.confirmPassword}
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
    </>
  );
};

export default Signup;
