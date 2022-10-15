import ProfileStep from './profile';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithProviders } from 'utils/test-utils';

const PROFILE = {
	strava_id: 'abc123def456',
	first_name: 'Peter',
	last_name: 'Parker'
};

const onCompleteStep = jest.fn();

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

describe('Sign Up Page - Step 2', () => {
	test('shows the Profile Form', () => {
		renderWithProviders(<ProfileStep profile={PROFILE} onCompleteStep={onCompleteStep} />);

		// Fieldset exists
		const fieldset = screen.getByRole('group');
		expect(fieldset).toBeInTheDocument();

		// There are three text fields
		const textFields = screen.getAllByRole('textbox');
		expect(textFields.length).toBe(3);

		// An email field is shown
		const emailField = screen.getByRole('textbox', {name: 'signup.profile-email-field-label'});
		expect(emailField).toBeInTheDocument();
	});

	test('has the profile details pre-filled', () => {
		renderWithProviders(<ProfileStep profile={PROFILE} onCompleteStep={onCompleteStep} />);

		// First name is pre-filled
		const firstNameField = screen.getByRole('textbox', {name: 'signup.profile-first-name-field-label'});
		expect(firstNameField.value).toBe(PROFILE.first_name);

		// Last name is pre-filled
		const lastNameField = screen.getByRole('textbox', {name: 'signup.profile-last-name-field-label'});
		expect(lastNameField.value).toBe(PROFILE.last_name);

		// Email address is not pre-filled
		const emailField = screen.getByRole('textbox', {name: 'signup.profile-email-field-label'});
		expect(emailField.value).toBe('');
	});

	test('has a button to continue to the next step', async () => {
		renderWithProviders(<ProfileStep profile={PROFILE} onCompleteStep={onCompleteStep} />);

		const button = screen.getByRole('button', {name: 'signup.profile-continue-button'});
		expect(button).toBeInTheDocument();

		await userEvent.click(button);

		expect(onCompleteStep).toBeCalledTimes(1);
	});
});
