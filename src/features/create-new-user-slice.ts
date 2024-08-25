import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface createNewUser {

    user: {
        name: string,
        birthDate: string,
        username: string,
        cpf: string,
        phone: string,
        password: string,
    }
    address: {
        zipCode: string,
        city: string,
        uf: string,
        neighborhood?: string,
        street: string,
        number: string,
    }
}

const initialState: createNewUser = {

    user: {
        name: "",
        birthDate: "",
        username: "",
        cpf: "",
        phone: "",
        password: ""
    },
    address: {
        zipCode: "",
        city: "",
        number: "",
        uf: "",
        street: "",
        neighborhood: ""
    }

}

const createNewUserSlice = createSlice({
    name: "createNewUser",
    initialState,
    reducers: {
        setNewUser(state, action: PayloadAction<Partial<createNewUser>>) {
            return { ...state, ...action.payload };
        },
        setNewAddress(state, action: PayloadAction<Partial<createNewUser>>){
            return { ...state, ...action.payload };
        },
        resetNewUser(){
            return initialState;
        }
    }
})

export const { setNewUser, resetNewUser } = createNewUserSlice.actions;
export default createNewUserSlice.reducer;




