import { ReactComponent as StravaConnectSvg } from './strava-connect.svg'

const STRAVA_CLIENT_ID = 93532;

export const StravaConnectButton = () => {
	// https://www.strava.com/oauth/authorize?client_id=93532&response_type=code&redirect_uri=https://www.strafforts.com/auth/exchange-token&approval_prompt=auto&scope=read,profile:read_all,activity:read,activity:read_all
	const redirectUri = 'https://localhost:3000/auth/strava';
	const approvalPrompt = 'auto';
	const scope = 'profile:read_all,activity:read_all';
	const authorizeUri = `https://www.strava.com/oauth/authorize?client_id=${STRAVA_CLIENT_ID}&response_type=code&redirect_uri=${redirectUri}&approval_prompt=${approvalPrompt}&scope=${scope}`;

	return (
		<div className="strava-connect">
			<a href={authorizeUri} target="_blank" rel="noreferrer" role="button">
				<StravaConnectSvg />
			</a>
		</div>
	)
}


//https://www.strava.com/oauth/authorize?client_id=93532&redirect_uri=https://earthmileschallenge.com/auth/strava&approval_prompt=auto&scope=profile:read_all,activity:read_all
//https://www.strava.com/oauth/authorize?client_id=6414&response_type=code&redirect_uri=https://www.strafforts.com/auth/exchange-token&approval_prompt=auto&scope=read,profile:read_all,activity:read,activity:read_all