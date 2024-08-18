import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ValidationPasswordState{
    newPassword: string;
    confirmPassword: string;
    isEqual: boolean | undefined;
    hasStartedTypingInNew: boolean;
    hasStartedTypingInConfirm: boolean;
}

const initialState: ValidationPasswordState = {
    newPassword: '',
    confirmPassword: '',
    isEqual: undefined,
    hasStartedTypingInNew: false,
    hasStartedTypingInConfirm: false,
}

const validationPasswordSlice = createSlice({
    name: 'validationPassword',
    initialState,
    reducers: {
        setNewPassword(state, action: PayloadAction<string>){
            state.newPassword = action.payload;
            state.hasStartedTypingInNew = true;
        },
        setConfirmPassword(state, action: PayloadAction<string>){
            state.confirmPassword = action.payload;
            state.hasStartedTypingInConfirm = true;
            if (state.hasStartedTypingInNew) {
                state.isEqual = state.newPassword === action.payload && action.payload !== '';
            }
        },
        resetValidationPasswordState(state) {
            state.newPassword = '';
            state.confirmPassword = '';
            state.isEqual = undefined;
            state.hasStartedTypingInNew = false;
            state.hasStartedTypingInConfirm = false;
        }
    },

});

export const { setNewPassword, setConfirmPassword, resetValidationPasswordState } = validationPasswordSlice.actions;
export default validationPasswordSlice.reducer;