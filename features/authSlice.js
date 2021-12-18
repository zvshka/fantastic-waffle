import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    user: {}
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        register: (state, action) => {

        },
        login: (state, action) => {
            if (action.payload.email === "admin@admin.ru") {
                state.user = {
                    firstName: "Andrey",
                    lastName: "Pushpurs",
                    role: "ADMIN",
                    avatar: "https://cdn.discordapp.com/avatars/263349725099458566/b5b18f501c40f7ba6c8bc5f4085ab221.png?size=128"
                }
            } else {
                state.user = {
                    firstName: "Andrey",
                    lastName: "Pushpurs",
                    role: "USER",
                    avatar: "https://cdn.discordapp.com/avatars/263349725099458566/b5b18f501c40f7ba6c8bc5f4085ab221.png?size=128"
                }
            }
        },
        logout: (state, action) => {
            state.user = {}
        },
    }
})

export const {login, logout} = authSlice.actions

export const selectUser = (state) => state.auth.user

export default authSlice.reducer