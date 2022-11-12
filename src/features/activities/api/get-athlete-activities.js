export const getAthleteActivities = async (userId) => {
	try {
		const response = await fetch(`/users/${userId}/activities`, {credentials: 'include'});
		const json = await response.json();
		return json;
	} catch (error) {
		console.log(error);
	}

	return null;
}