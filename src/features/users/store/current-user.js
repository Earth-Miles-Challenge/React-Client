import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	profile: {
		first_name: '',
		last_name: '',
		email: '',
		picture: '',
		strava_id: '',
	},
	stravaConnection: {
		expires_at: '',
		expires_in: '',
		refresh_token: '',
		access_token: ''
	},
	challenges: []
}

const currentUserSlice = createSlice({
	name: 'currentUser',
	initialState,
	reducers: {
		updateProfile(state, action) {
			state.profile[action.payload.field] = action.payload.value
		},
		connectStrava(state, action) {
			state.stravaConnection = action.payload
		},
		disconnectStrava(state) {
			state.stravaConnected = {}
		},
		addChallenge(state, action) {
			state.challenges[action.payload.challengeId] = action.payload
		},
		updateChallengeDetail(state, action) {
			state.challenges[action.payload.challengeId][action.payload.field] = action.payload.value
		}
	},
})

export const selectProfile = state => state.currentUser.profile
export const selectStravaConnection = state => state.currentUser.stravaConnection;
export const selectChallenge = state => state.currentUser.challenges;

export const { updateProfile, connectStrava, disconnectStrava, addChallenge, updateChallengeDetail } = currentUserSlice.actions;
export default currentUserSlice.reducer;