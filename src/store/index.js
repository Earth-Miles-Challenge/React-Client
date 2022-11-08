import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { currentUserReducer, getProfile } from 'features/users'

const rootReducer = combineReducers({
	currentUser: currentUserReducer
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
	const profileState = await hydrateProfile({});
	const preloadedState = profileState;
	return setupStore(preloadedState);
}
