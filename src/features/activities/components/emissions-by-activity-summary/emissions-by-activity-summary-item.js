export const EmissionsByActivitySummaryItem = props => {
	const { activity } = props;
	return (
		<tr>
			<td>{activity.description}</td>
			<td>{activity.start_date}</td>
			<td>{activity.distance}</td>
			<td>{activity.co2_avoid_grams}</td>
		</tr>
	)
}