import { screen } from '@testing-library/react';
import { SignUpPage } from './sign-up-page';
import { renderWithProviders } from 'utils/test-utils';
import { setupStore } from 'store';
import { goToStep } from 'features/users';

const store = setupStore();

describe('Join Challenge Page', () => {
	test('shows the Connect Strava step initially', () => {
		renderWithProviders(<SignUpPage />, store);

		const activeStep = screen.getByRole('listitem', {current: true});
		expect(activeStep.textContent).toBe('Connect Strava');
	});

	test('shows the Complete Profile step', () => {
		store.dispatch(goToStep('Complete Profile'));
		renderWithProviders(<SignUpPage />, store);

		const activeStep = screen.getByRole('listitem', {current: true});
		expect(activeStep.textContent).toBe('Complete Profile');
	});

	test('shows the Emissions Savings step', () => {
		store.dispatch(goToStep('Your Emissions Savings'));
		renderWithProviders(<SignUpPage />, store);

		const activeStep = screen.getByRole('listitem', {current: true});
		expect(activeStep.textContent).toBe('Your Emissions Savings');
	});
});
