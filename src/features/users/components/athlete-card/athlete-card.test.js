import { render, screen } from '@testing-library/react';
import { AthleteCard } from './athlete-card';

const ATHLETE = {
	id: 1,
	profile: {
		name: 'Phil Coulson',
		email: 'phil@shield.dev',
		picture: 'https://localhost:3000/image.jpg',
		strava_id: '123123123'
	},
		stravaConnection: {
		expires_at: '',
		expires_in: '',
		refresh_token: '',
		access_token: ''
	}
};

describe('Athletes Card', () => {
	it('has a list item', () => {
		render(<AthleteCard athlete={ATHLETE} />)
		const listitem = screen.getByRole('listitem');
		expect(listitem).toBeInTheDocument();
	});

	it('has a level-3 heading with athlete name', () => {
		render(<AthleteCard athlete={ATHLETE} />)
		const heading = screen.getByRole('heading', {level: 3});
		expect(heading).toHaveTextContent(ATHLETE.profile.name);
	});

	it('has a photo', () => {
		render(<AthleteCard athlete={ATHLETE} />)
		const image = screen.getByRole('img');
		expect(image).toHaveAttribute('src', ATHLETE.profile.picture);
	});

	it('has a pledge button', () => {
		render(<AthleteCard athlete={ATHLETE} />)
		const button = screen.getByRole('button');
		expect(button).toBeInTheDocument();
	});
})