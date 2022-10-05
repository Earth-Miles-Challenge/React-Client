import { render, screen } from '@testing-library/react';

import { EmissionsByActivitySummary } from './emissions-by-activity-summary';

const ACTIVITIES = [
	{
		title: 'Run to work',
		distance: 1300,
		start_date: '2018-02-16T14:52:54Z',
		start_date_local: '2018-01-16T23:52:54Z',
		emissions_avoided: 17,
	},
	{
		title: 'Run to work',
		distance: 1300,
		start_date: '2018-02-16T14:52:54Z',
		start_date_local: '2018-01-16T23:52:54Z',
		emissions_avoided: 17,
	},
	{
		title: 'Run to work',
		distance: 1300,
		start_date: '2018-02-16T14:52:54Z',
		start_date_local: '2018-01-16T23:52:54Z',
		emissions_avoided: 17,
	}
]

describe('Emissions By Activity Summary', () => {
	test('shows the activities', () => {
		render(<EmissionsByActivitySummary activities={ACTIVITIES} />);
		const activities = screen.getAllByRole('listitem');
		expect(activities.length).toBe(ACTIVITIES.length);
	});
});