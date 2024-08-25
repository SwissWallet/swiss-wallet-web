import { configureStore } from "@reduxjs/toolkit";
import userReducer from './features/register-data-user' 
import validationPasswordReducer from './features/register-user-password'
import userAddressReducer from './features/register-user-address';
import userLoginReducer from './features/login-slice';
import authUserReducer from './features/auth-user-slice'

export const store = configureStore({
    reducer:{
        user: userReducer,
        address: userAddressReducer,
        validationPassword: validationPasswordReducer,
        userLogin: userLoginReducer,
        authUser: authUserReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;