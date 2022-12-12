import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getToken } from 'utils/cookie-utils';

// Define a service using a base URL and expected endpoints
export const serverApi = createApi({
	reducerPath: 'serverApi',
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
		requestStravaToken: builder.query({
			query: () => `auth/strava/${window.location.search}`
		}),
	}),
});

export const {
	useGetUserQuery,
	useUpdateUserMutation,
	useRequestStravaTokenQuery
} = serverApi;