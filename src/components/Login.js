import React, { useState } from "react";
import Header from "./Header";

const Login = () => {

  const[isSignInForm,setIsSignInForm]= useState(true);

  const toggleSignInForm =() =>{
    setIsSignInForm(!isSignInForm);
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
        <form className=" w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-70">
          <h1 className="text-white font-bold text-3xl pb-2">{isSignInForm?"Sign In":"Sign Up"}</h1>
        { !isSignInForm && <input
            type="text"
            placeholder="User Name"
            className="p-4 my-2 border-2 w-full bg-gray-700"
          />}
          <input
            type="text"
            placeholder="Email Address"
            className="p-4 my-2 border-2 w-full bg-gray-700"
          />
          <input
            type="password"
            placeholder="password"
            className="p-4 my-2 border-2 w-full bg-gray-700"
          />
          <button className="p-4 my-6 cursor:pointer text-white bg-red-700  w-full rounded-lg">
            {isSignInForm?"Sign In":"Sign Up"}
          </button>
          <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
             {isSignInForm?
             "new to netflix? Sign Up Now":
             "Already a User continue to Sign In"}
            </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
