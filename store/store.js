import { configureStore } from "@reduxjs/toolkit";
import auth from "./authSlice";
import blogSlice from "./blogSlice";

const store = configureStore({
    reducer: {
        auth: auth,
        blog: blogSlice
    }
})

export default store