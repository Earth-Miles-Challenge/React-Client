import { useEffect } from 'react';
import { requestToken } from 'utils/strava-utils';

export const ConnectPage = () => {
	useEffect(() => {
		const handleStravaRedirect = async () => {
			const url = new URL(window.location);

			// Missing code and scope.
			if (url.searchParams.has('code') && url.searchParams.has('scope')) {
				const connected = await requestToken(url);
				if (connected) {
					window.location = process.env.REACT_APP_URL + '/registration';
				}
			}
		}

		handleStravaRedirect()
			.catch(console.error);
	}, []);
}