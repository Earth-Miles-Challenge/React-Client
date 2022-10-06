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

export const selectChallengeFormActiveStep = state => state.challengeForm.activeStep
export const { goToChallengeFormStep } = challengeFormSlice.actions;
export default challengeFormSlice.reducer;