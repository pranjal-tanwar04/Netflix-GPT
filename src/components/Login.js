import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { USER_AVATAR } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const Username = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonclick = () => {
    const message = checkValidData(
      email.current.value,
      password.current.value,
      Username.current?.value
    );
    setErrorMessage(message);
    if (message) return;

    const auth = getAuth();

    if (!isSignInForm) {
      // Sign Up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          return updateProfile(user, {
            displayName: Username.current.value,
            photoURL: USER_AVATAR,
          });
        })
        .then(() => {
          const { uid, email, displayName, photoURL } = auth.currentUser;
          dispatch(
            addUser({
              uid,
              email,
              displayName,
              photoURL,
            })
          );
        })
        .catch((error) => {
          setErrorMessage(error.message);
        });
    } else {
      // Sign In logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          dispatch(
            addUser({
              uid: user.uid,
              email: user.email,
              displayName: user.displayName,
              photoURL: user.photoURL,
            })
          );
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://analyticsindiamag.com/wp-content/uploads/2019/05/apps.55787.9007199266246365.687a10a8-4c4a-4a47-8ec5-a95f70d8852d.jpg"
          alt="logo"
        />
      </div>

      <div>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-70"
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
            placeholder="Password"
            className="p-4 my-2 border-2 w-full bg-gray-700"
          />

          <p className="text-red-500 font-bold py-2">{errorMessage}</p>

          <button
            className="p-4 my-6 cursor-pointer text-white bg-red-700 w-full rounded-lg"
            onClick={handleButtonclick}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>

          <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
            {isSignInForm
              ? "New to Netflix? Sign Up Now"
              : "Already a User? Sign In"}
          </p>
        </form>
      </div>
    </div>
  )
}
