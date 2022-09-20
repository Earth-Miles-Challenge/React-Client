export const getAthletes = async (search) => {
	try {
		const response = await fetch(`http://localhost:9000/athletes?search=${search}`);
		const json = await response.json();
		return json;
	} catch (error) {
		console.log(error);
	}
}