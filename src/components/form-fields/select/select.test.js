import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SelectField } from './select';

const LABEL = 'My label';

const OPTIONS = [
	[ 1, 'First option' ],
	[ 2, 'Second option' ],
	[ 3, 'Third option' ]
];

describe('SelectField component', () => {
	test('it has a label with the correct text', () => {
		render(<SelectField label={LABEL} options={OPTIONS} />);
		const select = screen.getByLabelText(LABEL);
		expect(select).toBeInTheDocument();
	});

	test('it has the correct number of options', () => {
		render(<SelectField label={LABEL} options={OPTIONS} />);
		const options = screen.getAllByRole('option');
		expect(options.length).toBe(3);
	});

	test('the correct option is selected', () => {
		render(<SelectField label={LABEL} options={OPTIONS} value={2} />);
		const selected = screen.getByRole('option', {selected: true});
		expect(selected).toBeInTheDocument();
		expect(selected.value).toBe('2');
	});

	test('the selected option is sent to the callback', async () => {
		let selectValue = '2';
		const onChange = jest.fn((newValue) => selectValue = newValue);
		const { rerender } = render(<SelectField label={LABEL} options={OPTIONS} value={selectValue} onChange={onChange} />);

		await userEvent.selectOptions(screen.getByRole('combobox'), '3');

		expect(onChange).toBeCalledTimes(1);
		expect(onChange).toBeCalledWith('3');

		/**
		 * @todo
		 * Instead of re-rendering and testing that the selected value has changed
		 * here, this should be tested in tests for parent components.
		 */
		rerender(<SelectField label={LABEL} options={OPTIONS} value={selectValue} onChange={onChange} />);
		expect(screen.getByRole('option', {name: 'First option'}).selected).toBe(false);
		expect(screen.getByRole('option', {name: 'Second option'}).selected).toBe(false);
		expect(screen.getByRole('option', {name: 'Third option'}).selected).toBe(true);
	});
});