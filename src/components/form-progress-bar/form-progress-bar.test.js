import { render, screen } from '@testing-library/react';

import { FormProgressBar } from './form-progress-bar';

const STEPS = ['Connect Strava', 'Join Challenge', 'Complete Profile'];
const ACTIVE_STEP_INDEX = 1;

describe('Form Progress Bar', () => {
	it('has a list with three list items', () => {
		render(<FormProgressBar steps={STEPS} activeStep={STEPS[ACTIVE_STEP_INDEX]} />);
		const list = screen.getByRole('list');
		expect(list).toBeInTheDocument();

		const items = screen.getAllByRole('listitem');
		expect(items.length).toBe(3);
	});

	it('has one active step', () => {
		render(<FormProgressBar steps={STEPS} activeStep={STEPS[ACTIVE_STEP_INDEX]} />);
		const items = screen.getAllByRole('listitem');
		expect(items[ACTIVE_STEP_INDEX]).toHaveClass('form-progress-bar-item--active');
		expect(items[ACTIVE_STEP_INDEX - 1]).not.toHaveClass('form-progress-bar-item--active');
		expect(items[ACTIVE_STEP_INDEX + 1]).not.toHaveClass('form-progress-bar-item--active');
	});
});