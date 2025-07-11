import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login"
import {onAuthStateChanged}from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";


//body function is created and paths are deployed
const Body = () =>{
  const dispatch =useDispatch();

    const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },
  {
    path: "/browse",
    element: <Browse />
  }
]);

useEffect(()=>{
  onAuthStateChanged(auth, (user)=>{
    if(user){
      //user is signed in, see docs for a list of available properties
      //https://firebase.google.com/docs/reference/js/auth.user
      const {uid, email, displayName} =user;
      dispatch(addUser({uid:uid, email:email, displayName: displayName}));
      
    }
    else{
      //user is signed out
    }
  });

},[])

  return (
  <div>
    <RouterProvider router={appRouter} />
  </div>
  )
};


export default Body;
