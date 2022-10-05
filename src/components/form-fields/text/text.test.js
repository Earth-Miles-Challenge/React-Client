import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { TextField } from './text';

const LABEL = 'My label';

describe('TextField component', () => {
	test('it has a label with the correct text', () => {
		render(<TextField label={LABEL} />);
		const input = screen.getByRole('textbox');
		expect(input).toBeInTheDocument();
	});

	test('the correct value is set', () => {
		const value = '3';
		render(<TextField label={LABEL} value={value} />);
		const input = screen.getByRole('textbox');
		expect(input.value).toBe(value);
	});

	test('the updated value is sent to the callback', async () => {
		const initialValue = '';
		const updatedValue = 'a';
		const onChange = jest.fn();

		render(<TextField label={LABEL} value={initialValue} onChange={onChange} />);
		const input = screen.getByRole('textbox');

		await userEvent.type(input, updatedValue);
		expect(onChange).toBeCalledTimes(1);
		expect(onChange).toHaveBeenLastCalledWith(updatedValue);
	});
});