import { useEffect, useState } from 'react';
import { SelectField, RadioField, NumberField, TextareaField } from 'components';

import 'assets/style/form.scss';

const CHALLENGES = [
	[ 'christmas-2022', 'Christmas 2022 - ending December 25, 2022' ]
];

export const JoinChallengeForm = props => {
	const [ challenge, setChallenge ] = useState('');
	const [ activityType, setActivityType ] = useState('run');
	const [ distanceGoal, setDistanceGoal ] = useState();
	const [ distanceFieldLabel, setDistanceFieldLabel ] = useState('How many kilometres are you aiming to run for this challenge?');
	const [ motivation, setMotivation ] = useState('');

	useEffect(() => {
		setDistanceFieldLabel(() => {
			if ('run' === activityType) {
				return 'How many kilometres are you aiming to run for this challenge?';
			} else {
				return 'How many kilometres are you aiming to ride for this challenge?';
			}
		})
	}, [activityType])

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
			<NumberField
				label={distanceFieldLabel}
				id="distance-goal"
				min={0}
				step={1}
				value={distanceGoal}
				onChange={setDistanceGoal}
			/>
			<TextareaField
				label="Share a little about why you are participating in this challenge"
				id="motivation"
				value={motivation}
				onChange={setMotivation}
			/>
		</>
	);
};