import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface authUserState {
    email: string,
    name: string,
    birthDate: string,
    phone: string,
    address: {
        street: string,
        city: string,
        number: string,
    }
}

const initialState: authUserState = {
    email: '',
    name: '',
    birthDate: '',
    phone: '',
    address: {
        street: '',
        city: '',
        number: '',
    }
}

const authUserSlice = createSlice({
    name: 'authUser',
    initialState,
    reducers: {
        setAuthUser(state, action: PayloadAction<authUserState>) {
            return { ...state, ...action.payload };
        },
    },
});

export const { setAuthUser } = authUserSlice.actions;
export default authUserSlice.reducer