import {configureStore} from "@reduxjs/toolkit";
import submenuReducer from "../features/submenusSlice"

export const store = configureStore({
    reducer: {
        submenu: submenuReducer
    },
});
