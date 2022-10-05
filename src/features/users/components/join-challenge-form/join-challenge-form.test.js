
import { render, screen } from '@testing-library/react';
import { JoinChallengeForm } from './join-challenge-form'

describe('Join Challenge Form', () => {
	test('has a select input for user to select their challenge', () => {
		render(<JoinChallengeForm />);
		const inputNode = screen.getByLabelText('Which challenge would you like to join?', {selector: 'select'});
		expect(inputNode).toBeInTheDocument();
	});

	test('has a radio input for user to select their activity type', () => {
		render(<JoinChallengeForm />);
		const radiogroup = screen.getByRole('radiogroup');
		expect(radiogroup).toBeInTheDocument();

	});

	test('has a number input for user to set their distance goal', () => {
		render(<JoinChallengeForm />);
		const inputNode = screen.getByLabelText(/How many [kilometres|miles]/, {selector: 'input'});
		expect(inputNode).toBeInTheDocument();
		expect(inputNode.type).toBe('number');
	});

	test('has a textarea for users to share their motivation', () => {
		render(<JoinChallengeForm />);
		const inputNode = screen.getByLabelText('Share a little about why you are participating in this challenge', {selector: 'textarea'});
		expect(inputNode).toBeInTheDocument();
	});
});
