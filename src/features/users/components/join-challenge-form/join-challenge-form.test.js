
import { render, screen } from '@testing-library/react';

import { JoinChallengeForm } from './join-challenge-form'
import { renderWithProviders } from 'utils/test-utils'
import { setupStore } from 'store';
import { goToStep } from 'features/users';

describe('Join Challenge Form', () => {
	test('has an input for user to select their challenge', () => {
		const store = setupStore();
		store.dispatch(goToStep('Join Challenge'));
		renderWithProviders(<JoinChallengeForm />, store);

		const inputNode = screen.getByLabelText('Which challenge would you like to join?');
		expect(inputNode).toBeInTheDocument();
	});

	test('has an input for user to select their activity type', () => {
		const store = setupStore();
		store.dispatch(goToStep('Join Challenge'));
		renderWithProviders(<JoinChallengeForm />, store);

		const inputNode = screen.getByLabelText('Which challenge would you like to join?');
		expect(inputNode).toBeInTheDocument();
	});
});
