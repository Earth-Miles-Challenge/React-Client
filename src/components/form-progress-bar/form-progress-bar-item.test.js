import { render, screen } from '@testing-library/react';

import { FormProgressBarItem } from './form-progress-bar-item';

const LABEL = 'Label Text';

describe('Form Progress Bar Item', () => {
	it('has an inactive list item', () => {
		render(<FormProgressBarItem label={LABEL} activeStep={false} />);
		const item = screen.getByRole('listitem');
		expect(item).toHaveTextContent(LABEL);
		expect(item).toHaveClass('form-progress-bar-item');
		expect(item).not.toHaveClass('form-progress-bar-item--active');
	});

	it('has an active list item', () => {
		render(<FormProgressBarItem label={LABEL} activeStep={true} />);
		const item = screen.getByRole('listitem');
		expect(item).toHaveClass('form-progress-bar-item--active');
	});
});