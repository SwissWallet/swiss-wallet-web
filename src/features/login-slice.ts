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
        },
        resetUserLogin(){
            return initialState;
        }
    }
});

export const { setUserLogin, resetUserLogin } = userLoginSlice.actions;
export default userLoginSlice.reducer;