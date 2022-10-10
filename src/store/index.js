import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { challengeFormReducer, currentUserReducer, signUpFormReducer, getProfile } from 'features/users'
import { getI18n } from 'react-i18next';

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

const hydrateSignUpForm = (preloadedState) => {
	const t = getI18n.t;
	return {
		...preloadedState,
		signUpForm: {
			activeStep: preloadedState.currentUser.profile.strava_id !== '' ? t('signup.progress-bar-1') : t('signup.progress-bar-2')
		}
	}
}

export const setupStoreWithAsyncState = async () => {
	const profileState = await hydrateProfile({});
	const preloadedState = hydrateSignUpForm(profileState);
	return setupStore(preloadedState);
}
