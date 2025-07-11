import { configureStore } from "@reduxjs/toolkit";
import  useReducer from "./userSlice";

const appStore =configureStore(
    {
        user: useReducer,
    }
)

export default appStore;