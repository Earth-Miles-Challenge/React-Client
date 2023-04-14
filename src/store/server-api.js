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
	tagTypes: ['Auth', 'User', 'Activity'],
	endpoints: (builder) => ({
		login: builder.mutation({
			query: (data) => ({
				url: `auth/login`,
				method: `POST`,
				body: data
			}),
			async onCacheEntryAdded(arg, {dispatch}) {
				dispatch({type: 'authorization/updateCurrentUser', payload: arg});
			}
		}),
		getUser: builder.query({
			query: (userId) => `users/${userId}`,
			providesTags: (result, error, userId) => [{type: 'User', id: userId}]
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
			query: (userId) => `/users/${userId}/activities`,
			providesTags: [{type: 'Activity', id: 'LIST'}]
		}),
		updateUserActivity: builder.mutation({
			query: ({userId, activityId, ...data}) => ({
				url: `users/${userId}/activities/${activityId}`,
				method: `PUT`,
				body: data
			}),
			async onQueryStarted({ userId, activityId }, { dispatch, queryFulfilled }) {
				try {
					const { data: updatedActivity } = await queryFulfilled;
					dispatch(
						api.util.updateQueryData('getUserActivities', userId, (draft) => {
							const activityIndex = draft.findIndex((activity) => activity.id === activityId)
							draft[activityIndex] = updatedActivity;
						})
					)
				} catch {}
			}
		}),
		getEmissionsAvoidedByUser: builder.query({
			query: (userId) => `users/${userId}/impact/emissionsAvoided`,
			providesTags: (result, error, userId) => [{type: 'Impact', id: userId}]
		}),
		getEmissionsAvoided: builder.query({
			query: () => `/impact/emissionsAvoided`,
			providesTags: [{type: 'Impact', id: 'GLOBAL'}]
		}),
	}),
});

export const {
	useLoginMutation,
	useGetUserQuery,
	useUpdateUserMutation,
	useGetUserActivitiesQuery,
	useUpdateUserActivityMutation,
	useGetEmissionsAvoidedQuery,
	useGetEmissionsAvoidedByUserQuery,
} = api;