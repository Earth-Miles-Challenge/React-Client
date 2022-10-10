import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { challengeFormReducer, currentUserReducer, signUpFormReducer, getProfile } from 'features/users'

const rootReducer = combineReducers({
	challengeForm: challengeFormReducer,
	currentUser: currentUserReducer,
	signUpForm: signUpFormReducer
})

export const setupStore = preloadedState => {
	return configureStore({
		reducer: rootReducer,
		preloadedState
	})
}

const hydrateProfile = async (preloadedState) => {
	const _getProfileData = async () => {
		const profile = await getProfile();
		return {
			first_name: profile.first_name || '',
			last_name: profile.last_name || '',
			email: profile.email || '',
			picture: profile.picture || '',
			strava_id: profile.strava_id || ''
		}
	}

	const profileData = await _getProfileData();
	return {
		...preloadedState,
		currentUser: {
			...preloadedState.currentUser,
			profile: profileData
		}
	};
}

export const setupStoreWithAsyncState = async () => {
	const preloadedState = await hydrateProfile({});
	return setupStore(preloadedState);
}
