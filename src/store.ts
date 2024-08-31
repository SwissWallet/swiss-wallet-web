import { configureStore } from "@reduxjs/toolkit";
import userReducer from './features/register-data-user' 
import validationPasswordReducer from './features/register-user-password'
import userAddressReducer from './features/register-user-address';
import authUserReducer from './features/user-slice';
import loginReducer from './features/login-slice';

export const store = configureStore({
    reducer:{
        user: userReducer,
        address: userAddressReducer,
        validationPassword: validationPasswordReducer,
        authUser: authUserReducer,
        login: loginReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;