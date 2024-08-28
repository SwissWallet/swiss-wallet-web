import { createSlice } from "@reduxjs/toolkit";

const authUserSlice = createSlice({
    name: 'user',
    initialState: {
        value: {}
    },
    reducers: {
        setUser(state, action) {
            state.value = action.payload
        },
    },
});

export const { setUser } = authUserSlice.actions;
export default authUserSlice.reducer