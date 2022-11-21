import { getToken } from 'utils/cookie-utils';

export const getAthletes = async (search) => {
	try {
		const response = await fetch(`http://localhost:9000/athletes?search=${search}`);
		const json = await response.json();
		return json;
	} catch (error) {
		console.log(error);
	}
}

export const getUser = async (userId) => {
	try {
		const response = await fetch(`/users/${userId}`, {credentials: 'include'});
		const json = await response.json();
		return json;
	} catch (error) {
		console.log(error);
	}
}

export const updateUser = async (userId, updateData) => {
	try {
		const response = await fetch(`/users/${userId}`, {
			method: 'PUT',
			headers: {
				'Authorization': `Bearer ${getToken()}`,
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(updateData)
		});
		const json = await response.json();
		return json;
	} catch (error) {
		console.error(error);
	}
}