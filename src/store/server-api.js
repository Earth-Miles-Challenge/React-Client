import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getToken } from 'utils/cookie-utils';

// Define a service using a base URL and expected endpoints
export const api = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://localhost:9000/',
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
		getEmissionsAvoided: builder.query({
			query: () => `/impact/emissionsAvoided`
		}),
		getEmissionsAvoidedByUser: builder.query({
			query: (userId) => `users/${userId}/impact/emissionsAvoided`
		}),
	}),
});

export const {
	useGetUserQuery,
	useUpdateUserMutation,
	useGetEmissionsAvoidedQuery,
	useGetEmissionsAvoidedByUserQuery,
} = api;