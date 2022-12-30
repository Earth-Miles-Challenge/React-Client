import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getToken } from 'utils/cookie-utils';

// Define a service using a base URL and expected endpoints
export const api = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({
		baseUrl: process.env.REACT_APP_BACKEND_URL,
		prepareHeaders: (headers) => {
			const token = getToken();
			if (token) {
				headers.set('authorization', `Bearer ${token}`);
			}
			return headers;
		}
	}),
	endpoints: (builder) => ({
		getUser: builder.query({
			query: (userId) => `users/${userId}`
		}),
		updateUser: builder.mutation({
			query: ({id, ...data}) => ({
				url: `users/${id}`,
				method: `PUT`,
				body: data
			}),
			async onCacheEntryAdded(arg, {dispatch}) {
				dispatch({type: 'authorization/updateCurrentUser', payload: arg});
			}
		}),
		getUserActivities: builder.query({
			query: (userId) => `/users/${userId}/activities`
		}),
		getEmissionsAvoidedByUser: builder.query({
			query: (userId) => `users/${userId}/impact/emissionsAvoided`
		}),
		getEmissionsAvoided: builder.query({
			query: () => `/impact/emissionsAvoided`
		}),
	}),
});

export const {
	useGetUserQuery,
	useUpdateUserMutation,
	useGetUserActivitiesQuery,
	useGetEmissionsAvoidedQuery,
	useGetEmissionsAvoidedByUserQuery,
} = api;