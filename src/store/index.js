import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { challengeFormReducer, currentUserReducer, signUpFormReducer } from 'features/users'

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
