import { getToken } from 'utils/cookie-utils';

export const fetchLatest = async (userId) => {
	if (!userId) return null;

	try {
		const response = await fetch(`/users/${userId}/activities/fetchLatest`, {
			headers: {
				'Authorization': `Bearer ${getToken()}`
			}
		});
		const json = await response.json();
		return json;
	} catch (error) {
		console.log(error);
	}

	return null;
}

export const getAthleteActivities = async (userId) => {
	if (!userId) return null;

	try {
		const response = await fetch(`/users/${userId}/activities`, {
			headers: {
				'Authorization': `Bearer ${getToken()}`
			}
		});
		const json = await response.json();
		return json;
	} catch (error) {
		console.log(error);
	}

	return null;
}