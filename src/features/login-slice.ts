import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
    name: "login",
    initialState: {
        value: false
    },
    reducers: {
        setLogin: (state, action) => {
            state.value = action.payload;
        }
    }
})

export const { setLogin } = loginSlice.actions;
export default loginSlice.reducer;