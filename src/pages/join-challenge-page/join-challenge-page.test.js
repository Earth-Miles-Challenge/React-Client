import { screen } from '@testing-library/react';
import { JoinChallengePage } from './join-challenge-page';
import { renderWithProviders } from 'utils/test-utils';
import { setupStore } from 'store';
import { goToStep } from 'features/users';

const store = setupStore();

describe('Join Challenge Page', () => {
	test('shows the Connect Strava step initially', () => {
		renderWithProviders(<JoinChallengePage />, store);

		const activeStep = screen.getByRole('listitem', {current: true});
		expect(activeStep.textContent).toBe('Connect Strava');
	});

	test('shows the Join Challenge step', () => {
		store.dispatch(goToStep('Join Challenge'));
		renderWithProviders(<JoinChallengePage />, store);

		const activeStep = screen.getByRole('listitem', {current: true});
		expect(activeStep.textContent).toBe('Join Challenge');
	});

	test('shows the Complete Profile step', () => {
		store.dispatch(goToStep('Complete Profile'));
		renderWithProviders(<JoinChallengePage />, store);

		const activeStep = screen.getByRole('listitem', {current: true});
		expect(activeStep.textContent).toBe('Complete Profile');
	});
});
