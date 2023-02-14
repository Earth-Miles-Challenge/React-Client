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
	tagTypes: ['User', 'Activity'],
	endpoints: (builder) => ({
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
	useUpdateUserActivityMutation,
	useGetEmissionsAvoidedQuery,
	useGetEmissionsAvoidedByUserQuery,
} = api;