import { render, screen } from '@testing-library/react';
import { StravaConnectButton } from './strava-connect-button';

describe('Strava Connect Button', () => {
	test('has a button', () => {
		render(<StravaConnectButton />)
		const button = screen.getByRole('button');
		expect(button).toBeInTheDocument();
	})

	test('has the Strava Connect SVG', () => {
		render(<StravaConnectButton />)
		const svg = screen.getByText(/strava-connect.svg/);
		expect(svg).toBeInTheDocument();
	})
})