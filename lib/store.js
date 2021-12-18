import {configureStore} from "@reduxjs/toolkit";
import submenuReducer from "../features/submenusSlice"
import authReducer from "../features/authSlice"

export const store = configureStore({
    reducer: {
        submenu: submenuReducer,
        auth: authReducer
    },
});
