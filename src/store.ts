import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../src/features/get-user-input-slice'  

export const store = configureStore({
    reducer:{
        user: userReducer,
    }
})