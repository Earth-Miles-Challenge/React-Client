export const AthleteCard = ({ athlete }) => {
	const { name } = athlete.profile;
	return (
		<div className="athlete">
			<h3>{ name }</h3>
		</div>
	)
}