
import { render, screen } from '@testing-library/react';

import { JoinChallengeForm } from './join-challenge-form'
import { renderWithProviders } from 'utils/test-utils'
import { setupStore } from 'store';
import { goToStep } from 'features/users';

const store = setupStore();

beforeEach(() => {
	store.dispatch(goToStep('Join Challenge'));
});

describe('Join Challenge Form', () => {
	test('has a select input for user to select their challenge', () => {
		renderWithProviders(<JoinChallengeForm />, store);
		const inputNode = screen.getByLabelText('Which challenge would you like to join?', {selector: 'select'});
		expect(inputNode).toBeInTheDocument();
	});

	test('has a radio input for user to select their activity type', () => {
		renderWithProviders(<JoinChallengeForm />, store);
		const inputNode = screen.getByLabelText('Will you be running or riding for this challenge?', {selector: 'input'});
		expect(inputNode).toBeInTheDocument();
		expect(inputNode.type).toBe('radio');
	});

	test('has a number input for user to set their distance goal', () => {
		renderWithProviders(<JoinChallengeForm />, store);
		const inputNode = screen.getByLabelText(/How many [kilometres|miles]/, {selector: 'input'});
		expect(inputNode).toBeInTheDocument();
		expect(inputNode.type).toBe('number');
	});

	test('has a textarea for users to share their motivation', () => {
		renderWithProviders(<JoinChallengeForm />, store);
		const inputNode = screen.getByLabelText('Share a little about why you are participating in this challenge', {selector: 'textarea'});
		expect(inputNode).toBeInTheDocument();
	});
});
