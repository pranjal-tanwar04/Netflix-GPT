// import React, { useEffect } from "react";
import { createBrowserRouter} from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login"
// import {onAuthStateChanged}from "../utils/firebase";
// import { useDispatch } from "react-redux";
// import { addUser, removeUser } from "../utils/userSlice";


//body function is created and paths are deployed

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

  return (
  <div>
    <RouterProvider router={appRouter} />
  </div>
  )


export default Body;
