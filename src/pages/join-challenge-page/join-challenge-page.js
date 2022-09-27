import { StravaConnectButton, JoinChallengeForm } from 'features/users';
import { FormProgressBar } from 'components';

const STEPS = [
	'Connect Strava',
	'Join Challenge',
	'Complete Profile'
];

export const JoinChallengePage = () => {



	// State
	// 1. If user has not connected Strava yet, that is step 1
	// 2. If user has connected Strava but has not yet created a challenge, display link to create a challenge
	// 3. If a user has already created a challenge, show details

	return (
		<div>
			<FormProgressBar steps={STEPS} activeStep='Connect Strava' />
			<StravaConnectButton />
			<JoinChallengeForm />
		</div>
	)
}