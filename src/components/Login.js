import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { useNavigate } from "react-router-dom";
// import{getauth}
// import{createUserWithEmailAndPaswword}

//Login fucntion
const Login = () => {
  //using hook useState
  //signin and signup useState Logic
  const [isSignInForm, setIsSignInForm] = useState(true);
  //error message for wrong username, email,password
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate =useNavigate();


  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  //usinf useRef for using in buttons and Input for reference so that they can change  its states
  const email = useRef(null);
  const password = useRef(null);
  const Username = useRef(null);


  const handleButtonclick = () => {
    //this is just used to confirm that id pass are getting loaoded in console.
    console.log(email.current.value);
    console.log(password.current.value);

 //validate the form data
 //if the password , username and email gets wrong it will show on UI immediately
    const message = checkValidData(email.current.value,password.current.value,Username.current.value);

    //firebase logic api used here
    setErrorMessage(message);
    if(!message)return;

    // Sign in and Sign up logic
    if(!isSignInForm){
      //signup logic
      createUserWithEmailAndPaswword(
        auth,
        email.current.value,
        password.current.value
      )

      .then((userCredential) => {
        const user =userCredential.user;
        console.log(user);
        setErrorMessage(errorCode+"-"+errorMessage);
      })

        const errorCode =error.code;
        const errorMessage =error.message;
        setErrorMessage(errorCode +"-"+errorMessage);
 
   }

    else {
      //signIn In Logic
      signWithEmailAndPassword(
        auth, 
        email, 
        password
      )
         .then((userCredential)=>{
          //signed in
        const user =userCredential.user(user);
        console.log(user);
         navigate("/browse");
      })

      .catch((error)=>{
        const errorCode =error.code;
        const errorMessage =error.message;
        setErrorMessage(errorCode+"-"+errorMessage)
         navigate("/browse");
      
      });
    }

  return (
    <div>
      <Header />    {/**header component  is rendered here which contains logo */}
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
            ref={email} //useRef is used here
            type="text"
            placeholder="Email Address"
            className="p-4 my-2 border-2 w-full bg-gray-700"
          />

          <input
            ref={password} //useRef is used here
            type="password"
            placeholder="password"
            className="p-4 my-2 border-2 w-full bg-gray-700"
          />

          <p className="text-red-500 font-bold py-2">{errorMessage}</p>

          <button
            className="p-4 my-6 cursor:pointer text-white bg-red-700  w-full rounded-lg"
            onClick={handleButtonclick}//signup button changes to signin oor vice versa 
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>

          <p className="py-4 cursor-pointer" onClick={toggleSignInForm}> {/*toggle means switch between two states*/}
            {isSignInForm ? "new to netflix? Sign Up Now" : "Already a User continue to Sign In"}
          </p>
        </form>
      </div>
    </div>
  );
};
};

export default Login;
