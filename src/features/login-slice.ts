import { createSlice } from "@reduxjs/toolkit";

interface initialStateRoutes {
    value: boolean
}

const initialState: initialStateRoutes = {
    value: false
}

const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        setLogin: (state, action) => {
            state.value = action.payload;
        }
    }
})

export const { setLogin } = loginSlice.actions;
export default loginSlice.reducer;