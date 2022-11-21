import { createSlice } from '@reduxjs/toolkit';
import jwt_decode from 'jwt-decode';
import { getToken } from 'utils/cookie-utils';
import { serverApi } from 'store/server-api';
// import { updateUser } from 'features/users';
// import { response } from 'msw';

const initialState = {
	authChecked: false,
	loggedIn: false,
	currentUser: {}
}

// export const saveUser = createAsyncThunk('authorization/saveUser', async data => {
// 	const response = await updateUser();
// 	const response = await client.post('/fakeApi/todos', { todo: initialTodo })
// 	return response.body;
//   })

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
		dispatch(setAuthenticated(jwt_decode(token)));
	} else {
		dispatch(setNonAuthenticated());
	}
}

// export function saveUser(userData) {
// 	return async function saveUserThunk(dispatch, getState) {
// 		console.log(payload);
// 		const response = await updateUser();
// 		dispatch({type: 'authorization/updateCurrentUser', payload: response.body})
// 	}
// }

export default authorizationSlice.reducer;