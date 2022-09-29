import { useState } from 'react';
import { Select, Radio } from 'components';

const CHALLENGES = [
	[ 'christmas-2022', 'Christmas 2022 - ending December 25, 2022' ]
];

export const JoinChallengeForm = props => {

	const [ challenge, setChallenge ] = useState('');
	const [ activityType, setActivityType ] = useState('run');

	return (
		<>
			<Select
				label="Which challenge would you like to join?"
				options={CHALLENGES}
				id="challenge"
				value={challenge}
				onChange={setChallenge}
			/>
			<Radio
				label="Will you be running or riding for this challenge?"
				options={[['run', 'Running'], ['ride', 'Riding']]}
				id="activity-type"
				value={activityType}
				onChange={setActivityType}
			/>
		</>
	);
};