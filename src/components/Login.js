import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const email = useRef(null);
  const password = useRef(null);
  const Username = useRef(null);

  const handleButtonclick = () => {
    //validate the form data
    console.log(email.current.value);
    console.log(password.current.value);

    const message = checkValidData(
      email.current.value,
      password.current.value,
      Username.current.value
    );
    setErrorMessage(message);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://analyticsindiamag.com/wp-content/uploads/2019/05/apps.55787.9007199266246365.687a10a8-4c4a-4a47-8ec5-a95f70d8852d.jpg"
          alt="logo"
        ></img>
      </div>
      <div>
        <form
          onSubmit={(e) => e.preventDefault()}
          className=" w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-70"
        >
          <h1 className="text-white font-bold text-3xl pb-2">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>

          {!isSignInForm && (
            <input
              ref={Username}
              type="text"
              placeholder="User Name"
              className="p-4 my-2 border-2 w-full bg-gray-700"
            />
          )}

          <input
            ref={email}
            type="text"
            placeholder="Email Address"
            className="p-4 my-2 border-2 w-full bg-gray-700"
          />

          <input
            ref={password}
            type="password"
            placeholder="password"
            className="p-4 my-2 border-2 w-full bg-gray-700"
          />

          <p className="text-red-500 font-bold py-2">{errorMessage}</p>

          <button
            className="p-4 my-6 cursor:pointer text-white bg-red-700  w-full rounded-lg"
            onClick={handleButtonclick}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>

          <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
            {isSignInForm
              ? "new to netflix? Sign Up Now"
              : "Already a User continue to Sign In"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
