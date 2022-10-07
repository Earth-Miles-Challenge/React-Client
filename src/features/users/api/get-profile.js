export const getProfile = async () => {
	try {
		const response = await fetch(`http://localhost:9000/user/profile`);
		const json = await response.json();
		return json;
	} catch (error) {
		console.log(error);
	}
}