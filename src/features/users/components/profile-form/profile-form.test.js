
import { render, screen } from '@testing-library/react';
import { ProfileForm } from './profile-form'

describe('Profile Form', () => {
	test('has a text input for user to enter their name', () => {
		render(<ProfileForm />);
		const inputNode = screen.getByRole('textbox', {name: 'Your name'});
		expect(inputNode).toBeInTheDocument();
		expect(inputNode.type).toBe('text');
	});

	test('has a email input for user to enter their email address', () => {
		render(<ProfileForm />);
		const emailField = screen.getByRole('textbox', {name: 'Your email address'});
		expect(emailField).toBeInTheDocument();
		expect(emailField.type).toBe('email');
	});

	test('has a photo input for user to add their profile photo', () => {
		render(<ProfileForm />);
		const div = screen.getByRole('generic', {name: 'Your photo'});
		expect(div).toBeInTheDocument();
	});
});
