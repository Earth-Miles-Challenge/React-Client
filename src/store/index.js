import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { challengeFormReducer, currentUserReducer } from 'features/users'

const rootReducer = combineReducers({
	challengeForm: challengeFormReducer,
	currentUser: currentUserReducer
})

export const setupStore = preloadedState => {
	return configureStore({
		reducer: rootReducer,
		preloadedState
	})
}
