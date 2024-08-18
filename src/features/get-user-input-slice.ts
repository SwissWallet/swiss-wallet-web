import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserInputState{
    name: string,
    dateBorn: string,
    email: string,
    cpf: string,
    phone: string,
    password: string,
}

const initialState: UserInputState = {
    name: '',
    dateBorn: '',
    email: '',
    cpf: '',
    phone: '',
    password: ''
}

export const slice = createSlice({
    name: 'getUserInput',
    initialState,
    reducers: {
        newUser(state, action: PayloadAction<UserInputState>){
            return{
                ...state,
                ...action.payload,
            }
        }
    }
})

export const { newUser } = slice.actions;
export default slice.reducer;