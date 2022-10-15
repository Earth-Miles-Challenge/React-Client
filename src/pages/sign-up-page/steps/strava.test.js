import StravaConnectStep from './strava';
import { screen } from '@testing-library/react';
import { renderWithProviders } from 'utils/test-utils';

describe('Sign Up Page - Step 1', () => {
	test('shows the Connect Strava button', () => {
		renderWithProviders(<StravaConnectStep />);

		const button = screen.getByRole('button');
		expect(button).toBeInTheDocument();

		const svg = screen.getByText(/strava-connect.svg/);
		expect(svg).toBeInTheDocument();
	});
});
