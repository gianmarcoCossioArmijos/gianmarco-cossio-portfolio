import { configureStore } from "@reduxjs/toolkit"
import language from './language'
import theme from './theme'

export const store = configureStore({
    reducer: {
        language: language,
        theme: theme

    }
})