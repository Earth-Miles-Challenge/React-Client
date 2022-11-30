import { useTranslation } from 'react-i18next';
import { EmissionsByActivitySummaryItem } from './emissions-by-activity-summary-item';

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
	const { t } = useTranslation();

	return (
		<table className="activity-table">
			<thead>
				<tr>
					<th>{t("signup.impact.activityTableActivityColumn")}</th>
					<th>{t("signup.impact.activityTableDistanceColumn")}</th>
					<th>{t("signup.impact.activityTableDateColumn")}</th>
					<th>{t("signup.impact.activityTableSavingsColumn")}</th>
				</tr>
			</thead>
			<tbody>
				{getFilteredAndSortedActivities(activities, sortBy, filterCommutes).map(
					(activity) => <EmissionsByActivitySummaryItem key={activity.id} activity={activity} />
				)}
			</tbody>
		</table>
	);
}