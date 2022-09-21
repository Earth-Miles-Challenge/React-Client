import { render, screen } from '@testing-library/react';
import { StravaConnectButton } from './strava-connect-button';

describe('Strava Connect Button', () => {
	it('has a button', () => {
		render(<StravaConnectButton />)
		const button = screen.getByRole('button');
		expect(button).toBeInTheDocument();
	})

	it('has the Strava Connect SVG', () => {
		render(<StravaConnectButton />)
		const svg = screen.getByText(/strava-connect.svg/);
		expect(svg).toBeInTheDocument();
	})
})