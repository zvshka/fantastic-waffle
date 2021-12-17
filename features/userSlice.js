import {createSlice} from "@reduxjs/toolkit";
import {submenuSlice} from "./submenusSlice";

const initialState = {
    user: {}
}

export const userSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        register: (state, action) => {

        },
        login: (state, action) => {

        },
        logout: (state, action) => {

        },
    }
})

export const {login, logout} = userSlice.actions

export const selectUser = (state) => state.auth.user

export default submenuSlice.reducer