import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	activeStep: 'Connect Strava'
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