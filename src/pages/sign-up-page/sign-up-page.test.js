import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SignUpPage } from './sign-up-page';
import { renderWithProviders } from 'utils/test-utils';
import { setupStore } from 'store';
import { useSelector } from 'react-redux';
import { updateProfile, selectProfile } from 'features/users';

// const store = setupStore();

jest.mock('react-i18next', () => ({
	// this mock makes sure any components using the translate hook can use it without a warning being shown
	useTranslation: () => {
	  return {
		t: (str) => str,
		i18n: {
		  changeLanguage: () => new Promise(() => {}),
		},
	  };
	},
  }));

describe('Sign Up Page', () => {
	test('shows the Connect Strava step initially', () => {
		renderWithProviders(<SignUpPage />);

		const list = screen.getByRole('list');
		expect(list).toBeInTheDocument();

		const activeStep = screen.getByRole('listitem', {current: true});
		expect(activeStep.textContent).toBe('signup.progress-bar-1');
	});

	test('shows the Complete Profile step', () => {
		renderWithProviders(<SignUpPage />, {
			preloadedState: {
				currentUser: {
					profile: {
						strava_id: 'abc123def456'
					}
				}
			}
		});

		const activeStep = screen.getByRole('listitem', {current: true});
		expect(activeStep.textContent).toBe('signup.progress-bar-2');
	});

	test('shows the Emissions Savings step', async () => {
		renderWithProviders(<SignUpPage />, {
			preloadedState: {
				currentUser: {
					profile: {
						strava_id: 'abc123def456'
					}
				}
			}
		});

		const continueButton = screen.getByRole('button');
		expect(continueButton).toBeInTheDocument();

		await userEvent.click(continueButton);

		const activeStep = screen.getByRole('listitem', {current: true});
		expect(activeStep.textContent).toBe('signup.progress-bar-3');
	});
});
