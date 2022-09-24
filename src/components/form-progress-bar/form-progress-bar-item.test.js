import { render, screen } from '@testing-library/react';

import { FormProgressBarItem } from './form-progress-bar-item';

const LABEL = 'Label Text';
// const ACTIVE_STYLING = {
// 	color: '#FFFFFF',
// 	backgroundColor: '#1D8D0B'
// }

// const INACTIVE_STYLING = {
// 	color: '#444444'
// };

describe('Form Progress Bar Item', () => {
	it('has an inactive list item', () => {
		render(<FormProgressBarItem label={LABEL} activeStep={false} />);
		const item = screen.getByRole('listitem');
		expect(item).toHaveTextContent(LABEL);
		expect(item).toHaveClass('form-progress-bar-item');
		expect(item).not.toHaveClass('form-progress-bar-item--active');
		// expect(item).toHaveStyle(INACTIVE_STYLING);
	});

	it('has an active list item', () => {
		render(<FormProgressBarItem label={LABEL} activeStep={true} />);
		const item = screen.getByRole('listitem');
		expect(item).toHaveClass('form-progress-bar-item--active');
		// expect(item).toHaveStyle(ACTIVE_STYLING);
	});
});