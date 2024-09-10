import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserInputState {
    name: string,
    dateBorn: string,
    email: string,
    cpf: string,
    phone: string,
}

const initialState: UserInputState = {
    name: '',
    dateBorn: '',
    email: '',
    cpf: '',
    phone: '',
}

export const slice = createSlice({
    name: 'getUserInput',
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<Partial<UserInputState>>) {
            return { ...state, ...action.payload }
        },
        resetUser() {
            return initialState;
        }
    }
})

export const { setUser, resetUser } = slice.actions;
export default slice.reducer;