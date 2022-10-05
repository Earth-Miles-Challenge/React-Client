import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { EmailField } from './email';

const LABEL = 'My label';

describe('EmailField component', () => {
	test('it has a label with the correct text', () => {
		render(<EmailField label={LABEL} />);
		const input = screen.getByRole('textbox', {name: 'My label'});
		expect(input).toBeInTheDocument();
	});

	test('the correct value is set', () => {
		const value = 'Some text';
		render(<EmailField label={LABEL} value={value} />);
		const input = screen.getByRole('textbox');
		expect(input.value).toBe(value);
	});

	test('the updated value is sent to the callback', async () => {
		const initialValue = '';
		const updatedValue = 'a';
		const onChange = jest.fn();

		render(<EmailField label={LABEL} value={initialValue} onChange={onChange} />);
		const input = screen.getByRole('textbox');

		await userEvent.type(input, updatedValue);
		expect(onChange).toBeCalledTimes(1);
		expect(onChange).toHaveBeenLastCalledWith(updatedValue);
	});
});