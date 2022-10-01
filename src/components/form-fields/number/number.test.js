import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { NumberField } from './number';

const LABEL = 'My label';

describe('NumberField component', () => {
	test('it has a label with the correct text', () => {
		render(<NumberField label={LABEL} />);
		const input = screen.getByRole('spinbutton');
		expect(input).toBeInTheDocument();
	});

	test('the correct value is set', () => {
		const value = '3';
		render(<NumberField label={LABEL} value={value} />);
		const input = screen.getByRole('spinbutton');
		expect(input.value).toBe(value);
	});

	test('the updated value is sent to the callback', async () => {
		const initialValue = '3';
		const updatedValue = '7';
		const onChange = jest.fn();

		const { rerender } = render(<NumberField label={LABEL} value={initialValue} onChange={onChange} />);
		const input = screen.getByRole('spinbutton');

		await userEvent.clear(input);
		expect(onChange).toBeCalledTimes(1);
		expect(onChange).toBeCalledWith('');

		rerender(<NumberField label={LABEL} value={''} onChange={onChange} />)

		await userEvent.type(input, updatedValue);
		expect(onChange).toBeCalledTimes(2);
		expect(onChange).toHaveBeenLastCalledWith(updatedValue);
	});

	/**
	 * This test fails due to userEvent not handling arrowdown/arrowup
	 * actions on number inputs. The keyboard stroke does not trigger the
	 * onChange method.
	 *
	 * @see https://github.com/testing-library/user-event/issues/1066
	 */
	xtest('the value can be changed with arrow up & down', async () => {
		const initialValue = '7';
		const minValue = '5';
		const onChange = jest.fn();

		render(<NumberField label={LABEL} value={initialValue} onChange={onChange} min={minValue} />);

		const input = screen.getByRole('spinbutton');

		await userEvent.click(input);
		expect(input).toHaveFocus();

		await userEvent.keyboard('{arrowdown}');
		expect(input).toHaveFocus();

		await userEvent.tab();
		expect(input).not.toHaveFocus();

		expect(onChange).toBeCalledWith('6');
	});
});