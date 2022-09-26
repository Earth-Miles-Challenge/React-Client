import { render, screen } from '@testing-library/react';
import { AthletesGrid } from './athletes-grid';

const ATHLETES = [
	{
		id: 1,
		profile: {
			name: 'Phil Coulson',
			email: 'phil@shield.dev',
			picture: '',
			strava_id: '123123123'
		},
			stravaConnection: {
			expires_at: '',
			expires_in: '',
			refresh_token: '',
			access_token: ''
		}
	},
	{
		id: 2,
		profile: {
			name: 'Melinda May',
			email: 'may@shield.dev',
			picture: '',
			strava_id: '123123123'
		},
			stravaConnection: {
			expires_at: '',
			expires_in: '',
			refresh_token: '',
			access_token: ''
		}
	},
	{
		id: 3,
		profile: {
			name: 'Gemma Simmons',
			email: 'g.simmons@shield.dev',
			picture: '',
			strava_id: '123123123'
		},
		stravaConnection: {
			expires_at: '',
			expires_in: '',
			refresh_token: '',
			access_token: ''
		}
	}
]

describe('Athletes Grid', () => {
	test('has a list', () => {
		render(<AthletesGrid athletes={ATHLETES} />)
		const list = screen.getByRole('list');
		expect(list).toBeInTheDocument();
	});

	test('has three list items', () => {
		render(<AthletesGrid athletes={ATHLETES} />)
		const listitems = screen.getAllByRole('listitem');
		expect(listitems).toHaveLength(3);
	});

	test('empty list has no list', () => {
		render(<AthletesGrid athletes={[]} />)
		const message = screen.getByText(/No athletes found/i);
		expect(message).toBeInTheDocument();
	})
})