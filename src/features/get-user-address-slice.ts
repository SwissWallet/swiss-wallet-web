import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface addressUserState {
    cep: string,
    city: string,
    uf: string,
    neighborhood: string,
    street: string,
    complement: string,
}

const initialState: addressUserState = {
    cep: '',
    city: '',
    uf: '',
    neighborhood: '',
    street: '',
    complement: '',
}

const addressSlice = createSlice({
    name: 'address',
    initialState,
    reducers: {
        setAddress(state, action: PayloadAction<Partial<addressUserState>>) {
            return { ...state, ...action.payload };
        },
    },
});

export const { setAddress } = addressSlice.actions;
export default addressSlice.reducer