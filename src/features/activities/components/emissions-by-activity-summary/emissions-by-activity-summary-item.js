export const EmissionsByActivitySummaryItem = props => {
	const { activity } = props;
	const distance = (activity.distance / 1000).toFixed(2) + 'km';
	const date = new Date(activity.start_date_local).toLocaleDateString('en-US', {month: 'long', day: 'numeric', year: 'numeric'});
	const kgAvoided = activity.co2_avoided_grams ? activity.co2_avoided_grams / 1000 + 'kg CO2e' : '-';
	return (
		<tr>
			<td>{activity.description}</td>
			<td>{distance}</td>
			<td>{date}</td>
			<td>{kgAvoided}</td>
		</tr>
	)
}