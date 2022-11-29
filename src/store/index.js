import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { authorizationReducer } from 'features/users'
import { serverApi } from './server-api';

const rootReducer = combineReducers({
	authorization: authorizationReducer,
	[serverApi.reducerPath]: serverApi.reducer
})

export const setupStore = preloadedState => {
	return configureStore({
		reducer: rootReducer,
  		middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(serverApi.middleware),
		preloadedState
	})
}
