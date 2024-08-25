import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface userLogin{
    username: string,
    password: string
}

const initialState: userLogin = {
    username: '',
    password: '',
}

export const userLoginSlice = createSlice({
    name: 'userLogin',
    initialState,
    reducers: {
        setUserLogin(state, action: PayloadAction<Partial<userLogin>>){
            return { ...state, ...action.payload }
        }
    }
});

export const { setUserLogin } = userLoginSlice.actions;
export default userLoginSlice.reducer;