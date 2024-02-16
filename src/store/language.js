import { createSlice } from "@reduxjs/toolkit";

const initialState = (localStorage.getItem("language"))

export const language = createSlice({
    name: "language",
    initialState,
    reducers: {
        setLang: (state) => {
             
            const currentLanguage = localStorage.getItem("language")

            if (currentLanguage == "es") {

                return "en";
            }

            if (currentLanguage == "en") {

                return "es";
            }
        }
    }
})

export default language.reducer;
export const { setLang } = language.actions;