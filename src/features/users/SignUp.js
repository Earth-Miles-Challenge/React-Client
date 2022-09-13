import './SignUp.css';
import { ReactComponent as StravaConnectSvg } from './StravaConnect.svg'

const STRAVA_CLIENT_ID = 93532;


export const SignUpPage = () => {

	// https://www.strava.com/oauth/authorize?client_id=93532&response_type=code&redirect_uri=https://www.strafforts.com/auth/exchange-token&approval_prompt=auto&scope=read,profile:read_all,activity:read,activity:read_all
	const redirectUri = 'https://localhost:3000/auth/strava';
	const approvalPrompt = 'auto';
	const scope = 'profile:read_all,activity:read_all';
	const authorizeUri = `https://www.strava.com/oauth/authorize?client_id=${STRAVA_CLIENT_ID}&response_type=code&redirect_uri=${redirectUri}&approval_prompt=${approvalPrompt}&scope=${scope}`;

	// State
	// 1. If user has not connected Strava yet, that is step 1
	// 2. If user has connected Strava but has not yet created a challenge, display link to create a challenge
	// 3. If a user has already created a challenge, show details

	return (
		<div className="strava-connect">
			<a href={authorizeUri} target="_blank" rel="noreferrer">
				<StravaConnectSvg />
			</a>
		</div>
	)
}


//https://www.strava.com/oauth/authorize?client_id=93532&redirect_uri=https://earthmileschallenge.com/auth/strava&approval_prompt=auto&scope=profile:read_all,activity:read_all
//https://www.strava.com/oauth/authorize?client_id=6414&response_type=code&redirect_uri=https://www.strafforts.com/auth/exchange-token&approval_prompt=auto&scope=read,profile:read_all,activity:read,activity:read_all