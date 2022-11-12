import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
// import { useSelector } from 'react-redux';
import { SignUpPage } from './sign-up-page';
import { server } from 'mocks/server.js';
import { renderWithProviders } from 'utils/test-utils';
// import { setupStore } from 'store';
// import { updateProfile, selectProfile } from 'features/users';

// Establish API mocking before all tests.
beforeAll(() => server.listen())

// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers())

// Clean up after the tests are finished.
afterAll(() => server.close())

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
				authorization: {
					currentUser: {}
				}
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
				authorization: {
					currentUser: {}
				}
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

	test('the Emissions Savings step shows a list of activities', async () => {
		renderWithProviders(<SignUpPage />, {
			preloadedState: {
				authorization: {
					currentUser: {}
				}
						strava_id: 'abc123def456'
					}
				}
			}
		});
		await userEvent.click(screen.getByRole('button'));
	});
});
