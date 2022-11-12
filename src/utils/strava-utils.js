const getStravaClientId = () => 93532;

export const getStravaAuthorizeUri = (state) => {
	const redirectUri = 'http://localhost:3000';
	const approvalPrompt = 'auto';
	const scope = 'profile:read_all,activity:read_all,activity:write';

	return 'https://www.strava.com/oauth/authorize'
		+ `?client_id=${getStravaClientId()}`
		+ `&response_type=code`
		+ `&redirect_uri=${redirectUri}`
		+ `&approval_prompt=${approvalPrompt}`
		+ `&scope=${scope}`
		+ `&state=${state}`;

}

export const requestToken = async (url) => {
	try {
		const response = await fetch(`/auth/strava${window.location.search}`, {
			method: 'GET',
			headers: { 'Content-Type': 'application/json; charset=UTF-8' },
		});

		return response.success;
	} catch (err) {
		console.log(err);
	}
}