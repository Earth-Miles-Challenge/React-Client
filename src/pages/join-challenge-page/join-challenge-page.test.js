import { screen } from '@testing-library/react';
import { JoinChallengePage } from './join-challenge-page';
import { renderWithProviders } from 'utils/test-utils';
import { setupStore } from 'store';
import { goToStep } from 'features/users';

describe('Join Challenge Page', () => {
	it('shows the Connect Strava step initially', () => {
		renderWithProviders(<JoinChallengePage />);

		const button = screen.getByRole('button');
		expect(button).toBeInTheDocument();
		expect(button.textContent).toBe('strava-connect.svg');

		const activeStep = screen.getByRole('listitem', {current: true});
		expect(activeStep.textContent).toBe('Connect Strava');
	});

	it('shows the Join Challenge step', () => {
		const store = setupStore();
		store.dispatch(goToStep('Join Challenge'));
		renderWithProviders(<JoinChallengePage />, store);

		const inputNode = screen.getByLabelText('Which challenge would you like to join?');
		expect(inputNode).toBeInTheDocument();

		const activeStep = screen.getByRole('listitem', {current: true});
		expect(activeStep.textContent).toBe('Join Challenge');
	});

	it('shows the Complete Profile step', () => {
		const store = setupStore();
		store.dispatch(goToStep('Complete Profile'));
		renderWithProviders(<JoinChallengePage />, store);

		const inputNode = screen.getByLabelText('Your name');
		expect(inputNode).toBeInTheDocument();

		const activeStep = screen.getByRole('listitem', {current: true});
		expect(activeStep.textContent).toBe('Complete Profile');
	});
});
