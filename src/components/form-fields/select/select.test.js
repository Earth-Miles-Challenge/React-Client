import { render, screen } from '@testing-library/react';
import { Select } from './select';

const LABEL = 'My label';

const OPTIONS = [
	[ 1, 'First option' ],
	[ 2, 'Second option' ],
	[ 3, 'Third option' ]
];

describe('Select component', () => {
	test('it has a label with the correct text', () => {
		render(<Select label={LABEL} options={OPTIONS} />);
		const select = screen.getByLabelText(LABEL);
		expect(select).toBeInTheDocument();
	});

	test('it has the correct number of options', () => {
		render(<Select label={LABEL} options={OPTIONS} />);
		const options = screen.getAllByRole('option');
		expect(options.length).toBe(3);
	});

	test('the correct option is selected', () => {
		render(<Select label={LABEL} options={OPTIONS} value={2} />);
		const selected = screen.getByRole('option', {selected: true});
		expect(selected).toBeInTheDocument();
		expect(selected.value).toBe('2');
	});
});