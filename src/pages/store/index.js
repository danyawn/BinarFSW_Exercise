import { configureStore } from "@reduxjs/toolkit";
import users from "./users";

export const store = configureStore({
    reducer: {
        users
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false
        })
})