import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../src/features/get-user-input-slice' 
import validationPasswordReducer from '../src/features/validation-password-slice'
import userAddressReducer from '../src/features/get-user-address-slice';

export const store = configureStore({
    reducer:{
        user: userReducer,
        address: userAddressReducer,
        validationPassword: validationPasswordReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;