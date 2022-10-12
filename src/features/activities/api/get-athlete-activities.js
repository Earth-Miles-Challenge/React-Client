export const getAthleteActivities = async () => {
	try {
		const response = await fetch(`/user/activities`, {credentials: 'include'});
		const json = await response.json();
		return json;
	} catch (error) {
		console.log(error);
	}

	return null;
}