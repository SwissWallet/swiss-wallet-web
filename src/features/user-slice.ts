import { createSlice } from "@reduxjs/toolkit";

interface User {
    id: number;
    username: string;
    name: string;
    cpf: string;
    birthDate: string;
    phone: string;
    role: string;
}

interface Address {
    id: number;
    zipCode: string;
    street: string;
    city: string;
    number: number;
    uf: string;
}

interface Account {
    id: number;
    value: number;
}

interface AuthUserState {
    user: User;
    address: Address;
    account: Account;
}

const initialState: AuthUserState = {
    user: {
        id: 0,
        username: '',
        name: '',
        cpf: '',
        birthDate: '',
        phone: '',
        role: '',
    },
    address: {
        id: 0,
        zipCode: '',
        street: '',
        city: '',
        number: 0,
        uf: '',
    },
    account: {
        id: 0,
        value: 0.0,
    },

};

const authUserSlice = createSlice({
    name: 'user',
    initialState: { value: initialState },
    reducers: {
        setUser: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { setUser } = authUserSlice.actions;
export default authUserSlice.reducer