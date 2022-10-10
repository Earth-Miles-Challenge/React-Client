import { createSlice } from '@reduxjs/toolkit';
import { getI18n } from 'react-i18next';

const initialState = {
	activeStep: getI18n().t('signup.progress-bar-1')
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