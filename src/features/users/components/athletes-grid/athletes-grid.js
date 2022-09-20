import { AthleteCard } from 'features/users';

export const AthletesGrid = ({athletes}) => {
	return (
		athletes.map(athlete => <AthleteCard key={athlete.id} athlete={athlete} />)
	)
}