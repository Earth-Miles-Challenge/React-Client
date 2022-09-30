import { useState } from 'react';
import { SelectField, RadioField } from 'components';

import 'components/form-fields/forms.css';

const CHALLENGES = [
	[ 'christmas-2022', 'Christmas 2022 - ending December 25, 2022' ]
];

export const JoinChallengeForm = props => {

	const [ challenge, setChallenge ] = useState('');
	const [ activityType, setActivityType ] = useState('run');

	return (
		<>
			<SelectField
				label="Which challenge would you like to join?"
				options={CHALLENGES}
				id="challenge"
				value={challenge}
				onChange={setChallenge}
			/>
			<RadioField
				label="Will you be running or riding for this challenge?"
				options={[['run', 'Running'], ['ride', 'Riding']]}
				id="activity-type"
				value={activityType}
				onChange={setActivityType}
			/>
		</>
	);
};