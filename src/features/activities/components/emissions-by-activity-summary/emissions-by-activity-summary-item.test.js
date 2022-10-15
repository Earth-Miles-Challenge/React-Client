import { render, screen } from '@testing-library/react';
import { setupWorker, rest } from 'msw'
import { EmissionsByActivitySummaryItem } from './emissions-by-activity-summary-item';

const ACTIVITY = {
	title: 'Run to work',
	distance: 1300,
	start_date: '2018-02-16T14:52:54Z',
	start_date_local: '2018-01-16T23:52:54Z',
	emissions_avoided: 17,
}

describe('Emissions By Activity Summary Item', () => {
	test('shows the activity title', () => {
		render(<EmissionsByActivitySummaryItem activity={ACTIVITY} />);
		const title = screen.getByText(ACTIVITY.title, {selector: 'h4'});
		expect(title).toBeInTheDocument();
	});

	test('shows the activity distance in km', () => {
		render(<EmissionsByActivitySummaryItem activity={ACTIVITY} />);
		const distance = ACTIVITY.distance / 100 + 'km';
		const el = screen.getByText(distance, {selector: 'div'});
		expect(el).toBeInTheDocument();
	});

	test('shows the activity date', () => {
		render(<EmissionsByActivitySummaryItem activity={ACTIVITY} />);
		const date = screen.getByText(ACTIVITY.date, {selector: 'div'});
		expect(date).toBeInTheDocument();
	});

	test('shows the co2 savings', () => {
		render(<EmissionsByActivitySummaryItem activity={ACTIVITY} />);
		const el = screen.getByText(17, {selector: 'div'});
		expect(el).toBeInTheDocument();
	});
});