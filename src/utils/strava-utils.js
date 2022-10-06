const getStravaClientId = () => 93532;

export const getStravaAuthorizeUri = () => {
	const redirectUri = 'http://localhost:3000';
	const approvalPrompt = 'auto';
	const scope = 'profile:read_all,activity:read_all,activity:write';

	return 'https://www.strava.com/oauth/authorize'
		+ `?client_id=${getStravaClientId()}`
		+ `&response_type=code`
		+ `&redirect_uri=${redirectUri}`
		+ `&approval_prompt=${approvalPrompt}`
		+ `&scope=${scope}`;

}

export const requestToken = async (url) => {
	try {
		const data = { code: url.searchParams.get('code') };
		const response = await fetch(`/auth/strava`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json; charset=UTF-8' },
			body: JSON.stringify(data)
		});
		console.log(response);
		const json = await response.json();
		console.log(json);
		return json;
	} catch (err) {
		console.log(err);
	}
}