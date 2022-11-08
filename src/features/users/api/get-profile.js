export const getProfile = async () => {
	try {
		const response = await fetch(`/users/1`, {credentials: 'include'});
		const json = await response.json();
		return json;
	} catch (error) {
		console.log(error);
	}
}