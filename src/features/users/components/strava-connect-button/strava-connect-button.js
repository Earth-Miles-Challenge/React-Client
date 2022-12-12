import { useEffect } from 'react';
import { ReactComponent as StravaConnectSvg } from './strava-connect.svg'
import { requestToken, getStravaAuthorizeUri } from 'utils/strava-utils';
import { useRequestStravaTokenQuery } from 'store/server-api';

export const StravaConnectButton = props => {
	const { onConnected } = props;

	useEffect(() => {
		return async () => {
			const url = new URL(window.location);

			// Missing code and scope.
			if (url.searchParams.has('code') && url.searchParams.has('scope')) {
				const connected = await requestToken(url);
				if (connected) {
					onConnected(connected);
				}
			}
		}
	}, [onConnected]);

	return (
		<div className="strava-connect">
			<a href={getStravaAuthorizeUri(window.location)} rel="noreferrer" role="button">
				<StravaConnectSvg />
			</a>
		</div>
	)
}


//https://www.strava.com/oauth/authorize?client_id=93532&redirect_uri=https://earthmileschallenge.com/auth/strava&approval_prompt=auto&scope=profile:read_all,activity:read_all
//https://www.strava.com/oauth/authorize?client_id=6414&response_type=code&redirect_uri=https://www.strafforts.com/auth/exchange-token&approval_prompt=auto&scope=read,profile:read_all,activity:read,activity:read_all