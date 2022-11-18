import { getToken } from 'utils/cookie-utils';

export const getEmissionsAvoided = async () => {
	try {
		const response = await fetch(`/impact/emissionsAvoided`);
		const json = await response.json();
		return json;
	} catch (error) {
		console.log(error);
	}

	return null;
}

export const getEmissionsAvoidedByUser = async (userId) => {
	try {
		const response = await fetch(`/users/${userId}/impact/emissionsAvoided`, {
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