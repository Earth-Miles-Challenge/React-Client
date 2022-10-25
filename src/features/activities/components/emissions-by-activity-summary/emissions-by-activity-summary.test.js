import { render, screen } from '@testing-library/react';

import { EmissionsByActivitySummary } from './emissions-by-activity-summary';

const ACTIVITIES = [
	{
		"id": 132,
		"activity_type": "run",
		"description": "Evening Run",
		"start_date" : "2018-02-20T18:02:13Z",
		"start_date_local" : "2018-02-20T10:02:13Z",
		"timezone" : "(GMT-08:00) America/Los_Angeles",
		"utc_offset" : -28800,
		"distance": 2483,
		"commute": 0,
		"start_latlng": "",
		"end_latlng": "",
		"emissions_avoided": 0
	},
	{
		"id": 139,
		"activity_type": "ride",
		"description": "Ride to work",
		"start_date" : "2022-03-01T18:02:13Z",
		"start_date_local" : "2022-03-01T10:02:13Z",
		"timezone" : "(GMT-08:00) America/Los_Angeles",
		"utc_offset" : -28800,
		"distance": 2483,
		"commute": 1,
		"start_latlng": "",
		"end_latlng": "",
		"co2_avoided_grams": 425
	},
	{
		"id": 162,
		"activity_type": "ride",
		"description": "Ride home via shop",
		"start_date" : "2022-03-04T18:02:13Z",
		"start_date_local" : "2022-03-04T10:02:13Z",
		"timezone" : "(GMT-08:00) America/Los_Angeles",
		"utc_offset" : -28800,
		"distance": 3290,
		"commute": 1,
		"start_latlng": "",
		"end_latlng": "",
		"co2_avoided_grams": 563
	}
];

jest.mock('react-i18next', () => ({
	// this mock makes sure any components using the translate hook can use it without a warning being shown
	useTranslation: () => {
		return {
			t: (str) => str,
			i18n: {
				changeLanguage: () => new Promise(() => {}),
			},
		};
	},
}));

describe('Emissions By Activity Summary', () => {
	test('shows only two activities when filtering commutes', () => {
		render(<EmissionsByActivitySummary activities={ACTIVITIES} filterCommutes={true} />);

		const activities = screen.getAllByRole('row');
		expect(activities.length).toBe(3);
	});

	test('shows all three activities when filtering is off', () => {
		render(<EmissionsByActivitySummary activities={ACTIVITIES} filterCommutes={false} />);
		const activities = screen.getAllByRole('row');
		expect(activities.length).toBe(4);
	});
});