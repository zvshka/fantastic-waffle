import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    user: false,
    notification: false,
    settings: false,
    search: false
}

export const submenuSlice = createSlice({
    name: "submenu",
    initialState,
    reducers: {
        toggleUser: (state) => {
            state.user = !state.user
        },
        toggleNotification: (state) => {
            state.notification = !state.notification
        },
        toggleSettings: (state) => {
            state.settings = !state.settings
        },
        toggleSearch: (state) => {
            state.search = !state.search
        }
    }
})

export const {
    toggleUser,
    toggleSettings,
    toggleNotification,
    toggleSearch
} = submenuSlice.actions

export const selectUserPanel = (state) => state.submenu.user
export const selectNotificationPanel = (state) => state.submenu.notification
export const selectSearchPanel = (state) => state.submenu.search
export const selectSettingsPanel = (state) => state.submenu.settings

export default submenuSlice.reducer