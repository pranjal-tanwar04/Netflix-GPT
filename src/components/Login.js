import React from "react";
import Header from "./Header";

const Login = () => {
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://analyticsindiamag.com/wp-content/uploads/2019/05/apps.55787.9007199266246365.687a10a8-4c4a-4a47-8ec5-a95f70d8852d.jpg"
          alt="logo"
        ></img>
      </div>
      <div className="">
      SignUp/SignIn
        <form className=" w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0">
          <input type="text" placeholder="Email Address" className="p-2 m-2 border-2 "/>
          <input type="password" placeholder="password" className="p-2 m-2 border-2"/>
          <button className="p-2 m-4 cursor:pointer font-bold text-white bg-red-600 ">Sign In</button>
        </form> 
      </div>
     </div>
  );
};

export default Login;