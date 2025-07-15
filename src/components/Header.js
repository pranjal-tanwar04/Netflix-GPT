import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import{onAuthStateChanged, signedOut} from "firebase/auth"
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";


const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignout = () => {
    signedOut(auth)
      .then(() => {
        navigate();
      })
      .catch((error) => {});
  };
  useEffect(()=>{
  const unsubscribe = onAuthStateChanged(auth, (user)=>{
    if(user){
      //user is signed in, see docs for a list of available properties
      //https://firebase.google.com/docs/reference/js/auth.user
      const {uid, email, displayName, photoURL} =user;
      dispatch(
        addUser({
          uid:uid,
          email:email,
          displayName:displayName,
          photoURL:photoURL,
        })
      );
      navigate("/browse")

    }
    else{
      //user is signed out
      dispatch(removeUser());
      navigate("/");
    }
  });
  //unsubscrube when component unmounts
  return () => unsubscribe();

},[])
  return (
    <div className="absolute w-screen px-8 by-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-40"
        src={LOGO} //netflix logo in constants.js file
        alt="logo"
      ></img>
      { user&&(
        <div className="flex">
          <img className="w-12 h-12 p-2" alt="usericon" src={user?.photoURL} />
          <button onClick={handleSignout} className="font-bold text-white">
            (Sign out)
          </button>
        </div>
     ) }
    </div>
  );
};

export default Header;
