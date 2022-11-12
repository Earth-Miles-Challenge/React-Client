export const getProfile = async (userId) => {
	try {
		const response = await fetch(`/users/${userId}`, {credentials: 'include'});
		const json = await response.json();
		return json;
	} catch (error) {
		console.log(error);
	}
}