import { createSlice } from '@reduxjs/toolkit';
import jwt_decode from 'jwt-decode';
import { getToken } from 'utils/cookie-utils';

const initialState = {
	authChecked: false,
	loggedIn: false,
	currentUser: {}
}

const authorizationSlice = createSlice({
	name: 'authorization',
	initialState,
	reducers: {
		setAuthenticated(state, action) {
			state.authChecked = true;
			state.loggedIn = true;
			state.currentUser = action.payload;
		},
		setNonAuthenticated(state, action) {
			state.authChecked = true;
		},
		updateCurrentUser(state, action) {
			state.currentUser = {
				...state.currentUser,
				...action.payload
			};
		}
	},
});

// Selectors
export const selectCurrentUser = state => state.authorization.currentUser
export const selectIsStravaConnected = state => {
	const res = state.authorization.currentUser.hasOwnProperty('activity_platform') && state.authorization.currentUser.activity_platform === 'strava';
	return res;
}

// Actions
export const { setAuthenticated, setNonAuthenticated, updateCurrentUser } = authorizationSlice.actions;

// Middleware
export async function setAuthenticationStatus(dispatch, getState) {
	const token = getToken();
	if (token) {
		const decoded = jwt_decode(token);
		if (decoded.exp > Date.now()/1000) {
			dispatch(setAuthenticated(decoded));
		}
	} else {
		dispatch(setNonAuthenticated());
	}
}

export default authorizationSlice.reducer;