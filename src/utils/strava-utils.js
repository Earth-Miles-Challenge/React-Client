const getStravaClientId = () => 93532;

export const getStravaAuthorizeUri = (state) => {
	const redirectUri = process.env.REACT_APP_URL;
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
		const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/auth/strava${window.location.search}`, {
			method: 'GET',
			credentials: 'include',
			headers: { 'Content-Type': 'application/json; charset=UTF-8' },
		});

		return response.ok;
	} catch (err) {
		console.log(err);
	}
}