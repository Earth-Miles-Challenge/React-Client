import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { authorizationReducer } from 'features/users'
import { api } from './server-api';

const rootReducer = combineReducers({
	authorization: authorizationReducer,
	[api.reducerPath]: api.reducer
})

export const setupStore = preloadedState => {
	return configureStore({
		reducer: rootReducer,
  		middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
		preloadedState
	})
}
