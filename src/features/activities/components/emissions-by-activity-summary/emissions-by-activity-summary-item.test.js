import { render, screen } from '@testing-library/react';
import { EmissionsByActivitySummaryItem } from './emissions-by-activity-summary-item';

const ACTIVITY = {
	description: 'Run to work',
	distance: 1300,
	start_date: '2018-02-16T14:52:54Z',
	timezone: 'America/Los_Angeles',
	co2_avoided_grams: 1725
};

describe('Emissions By Activity Summary Item', () => {
	test('shows the activity title', () => {
		render(<EmissionsByActivitySummaryItem activity={ACTIVITY} />);
		const title = screen.getByText(ACTIVITY.description, {selector: 'h4'});
		expect(title).toBeInTheDocument();
	});

	test('shows the activity distance in km', () => {
		render(<EmissionsByActivitySummaryItem activity={ACTIVITY} />);
		const distance = (ACTIVITY.distance / 1000).toFixed(2) + 'km';
		const el = screen.getByText(distance, {selector: 'td'});
		expect(el).toBeInTheDocument();
	});

	test('shows the activity date', () => {
		render(<EmissionsByActivitySummaryItem activity={ACTIVITY} />);
		const expected = new Date(ACTIVITY.start_date).toLocaleDateString('en-US', {
			timeZone: ACTIVITY.timezone,
			month: 'long',
			day: 'numeric',
			year: 'numeric'
		});
		const date = screen.getByText(expected, {selector: 'td'});
		expect(date).toBeInTheDocument();
	});

	test('shows the co2 savings', () => {
		render(<EmissionsByActivitySummaryItem activity={ACTIVITY} />);
		const el = screen.getByText('1.725kg CO2e');
		expect(el).toBeInTheDocument();
	});
});