import { AthleteCard } from 'features/users';

export const AthletesGrid = ({athletes}) => {
	if (!athletes.length) {
		return (
			<p>No athletes found.</p>
		)
	}

	return (
		<ul className="athletes-grid">
			{athletes.map(athlete => <AthleteCard key={athlete.id} athlete={athlete} />)}
		</ul>
	)
}