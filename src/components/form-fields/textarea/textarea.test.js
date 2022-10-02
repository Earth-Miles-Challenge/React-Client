import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { TextareaField } from './textarea';

const LABEL = 'My label';

describe('TextareaField component', () => {
	test('it has a label with the correct text', () => {
		render(<TextareaField label={LABEL} />);
		const input = screen.getByRole('textbox');
		expect(input).toBeInTheDocument();
	});

	test('the correct value is set', () => {
		const value = '3';
		render(<TextareaField label={LABEL} value={value} />);
		const input = screen.getByRole('textbox');
		expect(input.value).toBe(value);
	});

	test('the updated value is sent to the callback', async () => {
		const initialValue = '';
		const updatedValue = 'Some text';
		const onChange = jest.fn();
		render(<TextareaField label={LABEL} value={initialValue} onChange={onChange} />);
		await userEvent.type(screen.getByRole('textbox'), updatedValue);
		expect(onChange).toHaveBeenLastCalledWith(updatedValue);
	});
});