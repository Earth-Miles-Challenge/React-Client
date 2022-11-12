import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { authorizationReducer } from 'features/users'

const rootReducer = combineReducers({
	authorization: authorizationReducer
})

export const setupStore = preloadedState => {
	return configureStore({
		reducer: rootReducer,
		preloadedState
	})
}
