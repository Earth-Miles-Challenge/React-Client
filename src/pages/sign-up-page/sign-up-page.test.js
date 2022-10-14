import { screen } from '@testing-library/react';
import { SignUpPage } from './sign-up-page';
import { renderWithProviders } from 'utils/test-utils';
import { setupStore } from 'store';
import { updateProfile } from 'features/users';

const store = setupStore();

describe('Sign Up Page', () => {
	test('shows the Connect Strava step initially', () => {
		renderWithProviders(<SignUpPage />, store);

		const list = screen.getByRole('list');
		expect(list).toBeInTheDocument();

		const items = screen.getAllByRole('listitem');
		expect(items.length).toBe(3);
		// expect(items.count).toBe(3);
		// const activeStep = screen.getByText('list', {current: true});
		// expect(activeStep.textContent).toBe('signup.progress-bar-1');
	});

	xtest('shows the Complete Profile step', () => {
		store.dispatch(updateProfile({
			field: 'strava_id',
			value: 'abc123def456'
		}));
		renderWithProviders(<SignUpPage />, store);

		const activeStep = screen.getByRole('listitem', {current: true});
		expect(activeStep.textContent).toBe('signup.progress-bar-2');
	});

	xtest('shows the Emissions Savings step', () => {
		store.dispatch(updateProfile({
			field: 'strava_id',
			value: 'abc123def456'
		}));
		renderWithProviders(<SignUpPage />, store);

		const continueButton = screen.getByRole('button');
		continueButton.click();

		const activeStep = screen.getByRole('listitem', {current: true});
		expect(activeStep.textContent).toBe('signup.progress-bar-3');
	});
});
