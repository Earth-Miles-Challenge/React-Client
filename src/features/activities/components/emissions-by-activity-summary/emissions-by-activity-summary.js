import { EmissionsByActivitySummaryItem } from './emissions-by-activity-summary-item';

export const EmissionsByActivitySummary = props => {
	const {
		activities
	} = props;

	return (
		activities.map((activity) => <EmissionsByActivitySummaryItem key={activity.id} activity={activity} />)
	);
}