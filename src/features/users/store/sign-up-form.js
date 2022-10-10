import { createSlice } from '@reduxjs/toolkit';
import i18next from 'i18next';

const initialState = {
	activeStep: i18next.t('signup.progress-bar-1')
}

const signUpFormSlice = createSlice({
	name: 'signUpForm',
	initialState,
	reducers: {
		goToStep(state, action) {
			state.activeStep = action.payload
		}
	},
})

export const selectSignUpFormActiveStep = state => state.signUpForm.activeStep
export const { goToSignUpFormStep } = signUpFormSlice.actions;
export default signUpFormSlice.reducer;