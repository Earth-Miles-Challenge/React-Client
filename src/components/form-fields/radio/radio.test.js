import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Radio } from './Radio';

const LABEL = 'My label';

const OPTIONS = [
	[ '1', 'First option' ],
	[ '2', 'Second option' ],
	[ '3', 'Third option' ]
];

describe('Radio component', () => {
	test('it has a label with the correct text', () => {
		render(<Radio label={LABEL} options={OPTIONS} />);
		const legend = screen.getByText(LABEL, {selector: 'legend'});
		expect(legend).toBeInTheDocument();
	});

	test('it has the correct number of options', () => {
		render(<Radio label={LABEL} options={OPTIONS} />);
		const listitems = screen.getAllByRole('listitem');
		expect(listitems.length).toBe(3);
	});

	test('the correct option is checked', () => {
		render(<Radio label={LABEL} options={OPTIONS} value={'2'} />);
		const checked = screen.getByRole('radio', {checked: true});
		expect(checked).toBeInTheDocument();
		expect(checked.value).toBe('2');
	});

	test('the checked option is sent to the callback', async () => {
		let radioValue = '2';
		const onChange = jest.fn((newValue) => radioValue = newValue);
		const { rerender } = render(<Radio label={LABEL} options={OPTIONS} value={radioValue} onChange={onChange} />);

		await userEvent.click(screen.getByRole('radio', {name: 'Third option'}));

		expect(onChange).toBeCalledTimes(1);
		expect(onChange).toBeCalledWith('3');

		/**
		 * @todo
		 * Instead of re-rendering and testing that the checked value has changed
		 * here, this should be tested in tests for parent components.
		 */
		rerender(<Radio label={LABEL} options={OPTIONS} value={radioValue} onChange={onChange} />);
		expect(screen.getByRole('radio', {name: 'First option'}).checked).toBe(false);
		expect(screen.getByRole('radio', {name: 'Second option'}).checked).toBe(false);
		expect(screen.getByRole('radio', {name: 'Third option'}).checked).toBe(true);
	});
});