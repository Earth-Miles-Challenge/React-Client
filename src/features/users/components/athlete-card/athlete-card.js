export const AthleteCard = ({ athlete }) => {
	const { name } = athlete.profile;
	return (
		<li className="athlete-card">
			<h3>{ name }</h3>
		</li>
	)
}