import { getToken } from 'utils/cookie-utils';

export const getAthleteActivities = async (userId) => {
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