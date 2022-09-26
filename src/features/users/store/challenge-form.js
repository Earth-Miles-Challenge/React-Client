import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	activeStep: 'Connect Strava'
}

const challengeFormSlice = createSlice({
	name: 'challengeForm',
	initialState,
	reducers: {
		goToStep(state, action) {
			state.activeStep = action.payload
		}
	},
})

export const selectActiveStep = state => state.challengeForm.activeStep
export const { goToStep } = challengeFormSlice.actions;
export default challengeFormSlice.reducer;