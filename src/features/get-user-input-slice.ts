import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface adressUserState{
    cep: string,
    city: string,
    uf: string,
    neighborhood: string,
    street: string,
    complement: string,
}

interface UserInputState{
    name: string,
    dateBorn: string,
    email: string,
    cpf: string,
    phone: string,
    password: string,
    adressUser: adressUserState,
}

const initialState: UserInputState = {
    name: '',
    dateBorn: '',
    email: '',
    cpf: '',
    phone: '',
    password: '',
    adressUser: {
        cep: '',
        city: '',
        uf: '',
        neighborhood: '',
        street: '',
        complement: '',
    },
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