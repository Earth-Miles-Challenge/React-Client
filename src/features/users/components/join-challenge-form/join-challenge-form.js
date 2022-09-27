import { Select } from 'components';

const CHALLENGES = [
	'Christmas 2022'
];

export const JoinChallengeForm = props => {
	return (
		<Select
			label="Which challenge would you like to join?"
			options={CHALLENGES}
			id="challenge"
		/>
	);
};