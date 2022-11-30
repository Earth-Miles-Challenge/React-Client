import { EmissionsByActivitySummaryItem } from './emissions-by-activity-summary-item';

import './emissions-by-activity-summary.scss';

const dateSort = (activityA, activityB) => {
	if (activityA.start_date === activityB.start_date) return 0;
	if (activityA.start_date < activityB.start_date) return 1;
	return -1;
};

const filterByCommute = (activity) => activity.commute;

const getFilteredAndSortedActivities = (activities, sortBy, filterCommutes) => {
	const filteredActivities = filterCommutes ? activities.filter(filterByCommute) : activities;
	if ('date' === sortBy) {
		return filteredActivities.sort(dateSort);
	}
	return filteredActivities;
}

export const EmissionsByActivitySummary = props => {
	const { activities, sortBy, filterCommutes } = props;

	return (
		<div className="activity-list">
			{getFilteredAndSortedActivities(activities, sortBy, filterCommutes).map(
				activity => <EmissionsByActivitySummaryItem key={activity.id} activity={activity} />
			)}
		</div>
	);
}