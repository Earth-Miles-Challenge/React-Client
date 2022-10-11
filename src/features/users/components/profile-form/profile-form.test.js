
import { render, screen } from '@testing-library/react';
import { ProfileForm } from './profile-form'

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

describe('Profile Form', () => {
	test('has a fieldset for the user to enter their name', () => {
		render(<ProfileForm />);
		const fieldset = screen.getByRole('group');
		expect(fieldset).toBeInTheDocument();

		const legend = screen.getByText('signup.profile-name-field-label', {selector: 'legend'});
		expect(legend).toBeInTheDocument();
	});

	test('has text inputs for user to enter their first and last names', () => {
		render(<ProfileForm />);
		const firstName = screen.getByRole('textbox', {name: 'signup.profile-first-name-field-label'});
		expect(firstName).toBeInTheDocument();
		expect(firstName.type).toBe('text');

		const lastName = screen.getByRole('textbox', {name: 'signup.profile-last-name-field-label'});
		expect(lastName).toBeInTheDocument();
		expect(lastName.type).toBe('text');
	});

	test('has a email input for user to enter their email address', () => {
		render(<ProfileForm />);
		const emailField = screen.getByRole('textbox', {name: 'signup.profile-email-field-label'});
		expect(emailField).toBeInTheDocument();
		expect(emailField.type).toBe('email');
	});

	xtest('has a photo input for user to add their profile photo', () => {
		render(<ProfileForm />);
		const div = screen.getByRole('generic', {name: 'Your photo'});
		expect(div).toBeInTheDocument();
	});
});
