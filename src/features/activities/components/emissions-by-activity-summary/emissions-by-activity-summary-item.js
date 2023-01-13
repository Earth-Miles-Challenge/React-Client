import { ActivityMap } from 'features/activities';

export const EmissionsByActivitySummaryItem = props => {
	const { activity } = props;
	const distance = (activity.distance / 1000).toFixed(2) + 'km';
	const date = new Date(activity.start_date).toLocaleDateString('en-US', {
		timezone: activity.timezone,
		month: 'long',
		day: 'numeric',
		year: 'numeric'
	});
	const kgAvoided = activity.activity_impact && activity.activity_impact.fossil_alternative_co2 ? activity.activity_impact.fossil_alternative_co2 / 1000 + 'kg CO2e' : '-';
	return (
		<div className="activity">
			<h4>{activity.description}</h4>
			<span className="activity-distance">{distance}</span>
			<span className="activity-impact">{kgAvoided}</span>
			<span className="activity-date">{date}</span>
			{
				activity.activity_impact !== null &&
				<div className="activity-detail">
					<ActivityMap activity={activity} />
				</div>
			}
		</div>
	)
}