import { createSlice } from "@reduxjs/toolkit";

const initialState = (localStorage.getItem("theme"))

export const theme = createSlice({
    name: "theme",
    initialState,
    reducers: {
        setTheme: (state) => {
             
            const currentTheme = localStorage.getItem("theme")

            if (currentTheme == "dark") {

                return "light";
            }

            if (currentTheme == "light") {

                return "dark";
            }
        }
    }
})

export default theme.reducer;
export const { setTheme } = theme.actions;