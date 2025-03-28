import React, { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { NavLink } from "react-router";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // 👁️ React Icons ইমপোর্ট
import libery from "../Libery/libery";
import signUpImg from "../../src/assets/images/banner.jpg";

import { HashLoader, PropagateLoader } from "react-spinners";

const SignUp = () => {
  const auth = getAuth();
  // Libery থেকে সাইনআপ ডেটা লোড করা হচ্ছে
  const data = libery.signupData();
  const { InfoToast, SuccesToast, ErrorToast } = libery;
  //  Looading State
  const [loading, setLoading] = useState(false);
  // লগইন ইনফরমেশন state
  const [logInInfo, setLogInInfo] = useState({
    email: "",
    fullName: "",
    password: "",
  });

  // লগইন ইনফরমেশন error state
  const [logInInfoError, setLogInInfoError] = useState({
    emailError: "",
    fullNameError: "",
    passwordError: "",
  });

  // প্রতিটি Input Field এর ফোকাস state
  const [focusedFields, setFocusedFields] = useState({
    email: false,
    fullName: false,
    password: false,
  });

  // 👁️ Show / Hide Password State
  const [showPassword, setShowPassword] = useState(false);

  // 🔥 পাসওয়ার্ড দেখানোর/লুকানোর জন্য ফাংশন
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  //* ইনপুট ফিল্ডের ভ্যালু পরিবর্তন হলে এই ফাংশন কল হবে
  const handleLogInInfo = (e) => {
    const { name, value } = e.target;
    setLogInInfo({
      ...logInInfo,
      [name]: value,
    });
  };

  //* ইনপুট ফিল্ড ফোকাস হলে এই ফাংশন কল হবে
  const handleFocus = (name) => {
    setFocusedFields({
      ...focusedFields,
      [name]: true,
    });
  };

  //* ইনপুট ফিল্ড ফোকাস হারালে এই ফাংশন কল হবে
  const handleBlur = (name) => {
    setFocusedFields({
      ...focusedFields,
      [name]: false,
    });
  };

  // ✅ Validation Check
  const handleSignUp = () => {
    const { email, fullName, password } = logInInfo;
    let errors = {
      emailError: "",
      fullNameError: "",
      passwordError: "",
    };

    if (!email.trim()) {
      errors.emailError = "Email is required!";
    }

    if (!fullName.trim()) {
      errors.fullNameError = "Full Name is required!";
    }

    if (!password.trim()) {
      errors.passwordError = "Password is required!";
    }

    setLogInInfoError(errors);

    if (!errors.emailError && !errors.fullNameError && !errors.passwordError) {
      //  !sign up successfull portion
      // todo data transfer in database
      setLoading(true);
      const { fullName, email, password } = logInInfo;
      createUserWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          SuccesToast(`${fullName} Your Sign Up Succesful`);
        })
        .then(() => {
          // ! Authentication mail sent
          sendEmailVerification(auth.currentUser);
          InfoToast(`${fullName} Check Your Email For Verification`);
        })
        .then(() => {
          //! main sent completed
          console.log("main sent successfull");
        })
        .catch((err) => {
          ErrorToast(err.code);
        })
        .finally(() => {
          setLoading(false);
          setLogInInfo({
            ...logInInfo,
            email: "",
            fullName: "",
            password: "",
          });
        });
    }
  };
  // ! Loader Css
  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };
  return (
    <div>
      <div className="flex">
        {/* Left Side */}
        <div className="w-1/2 h-screen flex justify-center items-center">
          <div>
            <h1 className="text-[32px] mb-2 text-purple-600">
              Get started with easily register
            </h1>
            <p className="text-[18px] -mt-1">
              Free register and you can enjoy it
            </p>

            {/* Form */}
            <form
              action="#"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <div>
                {/* ইনপুট ফিল্ড রেন্ডার */}
                {data?.map(({ id, name, requierd }) => (
                  <div
                    className="relative items-start content-start mt-3"
                    key={id}
                  >
                    <label
                      htmlFor={name}
                      className={`absolute transition-all text-gray-500 px-2 bg-white inline-block z-10
                      ${
                        focusedFields[name] || logInInfo[name]
                          ? "-top-2 left-2 text-purple-600 text-sm px-1"
                          : "top-3 left-3"
                      }`}
                    >
                      {name}
                      {requierd && <span className="text-red-400">*</span>}
                    </label>

                    {/* ইনপুট ফিল্ড */}
                    <div className="relative w-66">
                      <input
                        id={name}
                        name={name}
                        value={logInInfo[name]}
                        onFocus={() => handleFocus(name)}
                        onBlur={() => handleBlur(name)}
                        className={`w-full p-3 border rounded outline-none transition-all pr-10
                          ${
                            focusedFields[name] || logInInfo[name]
                              ? "border-purple-600"
                              : "border-gray-400 bg-white"
                          }`}
                        onChange={handleLogInInfo}
                        type={
                          name === "email"
                            ? "email"
                            : name === "password"
                            ? showPassword // showPassword true hole type text hobe nahoy password
                              ? "text"
                              : "password"
                            : "text"
                        }
                      />

                      {/* 👁️ চোখের আইকন (শুধুমাত্র পাসওয়ার্ড ফিল্ডের জন্য) */}
                      {name === "password" && (
                        <button
                          type="button"
                          onClick={togglePasswordVisibility} //togtglePasswordVisibility for toggle the eye button
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-purple-600"
                        >
                          {showPassword ? (
                            <FaEyeSlash size={20} />
                          ) : (
                            <FaEye size={20} />
                          )}
                        </button>
                      )}
                    </div>

                    {/* 🔥 Error Message (ডায়নামিক) */}
                    {logInInfoError[name + "Error"] && (
                      <p className="text-red-500 text-sm mt-1">
                        *{logInInfoError[name + "Error"]}
                      </p>
                    )}
                  </div>
                ))}
              </div>

              {/* Sign Up Button */}
              {loading ? (
                <button
                  onClick={handleSignUp}
                  className="cursor-pointer px-25 py-2.5 bg-purple-500 text-white rounded-3xl mt-4"
                >
                  <HashLoader
                    color={"#ffff"}
                    loading={loading}
                    cssOverride={override}
                    size={24}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                  />
                </button>
              ) : (
                <button
                  onClick={handleSignUp}
                  className="cursor-pointer px-25 py-2.5 bg-purple-500 text-white rounded-3xl mt-4"
                >
                  Sign Up
                </button>
              )}
            </form>
            <p className="mt-3.5">
              Already have an account?
              <NavLink to="/signin" end>
                <span className="text-purple-600 cursor-pointer font-semibold">
                  Sign In
                </span>
              </NavLink>
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-1/2 h-screen">
          <picture>
            <img src={signUpImg} alt={signUpImg} />
          </picture>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
