import { useEffect } from 'react';
import { ReactComponent as StravaConnectSvg } from './strava-connect.svg'
import { requestToken, getStravaAuthorizeUri } from 'utils/strava-utils';

export const StravaConnectButton = props => {
	const { onConnected } = props;

	useEffect(() => {
		const handleStravaRedirect = async () => {
			const url = new URL(window.location);

			// Missing code and scope.
			if (url.searchParams.has('code') && url.searchParams.has('scope')) {
				const connected = await requestToken(url);
				if (connected) {
					onConnected(connected);
				}
			}
		}

		handleStravaRedirect()
			.catch(console.error);
	}, [onConnected]);

	return (
		<div className="strava-connect">
			<a href={getStravaAuthorizeUri(window.location)} rel="noreferrer" role="button">
				<StravaConnectSvg />
			</a>
		</div>
	)
}