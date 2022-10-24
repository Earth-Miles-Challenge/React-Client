import { useTranslation } from 'react-i18next';
import { EmissionsByActivitySummaryItem } from './emissions-by-activity-summary-item';

const dateSort = (activityA, activityB) => {
	if (activityA.start_date === activityB.start_date) return 0;
	if (activityA.start_date < activityB.start_date) return 1;
	return -1;
};

const filterByCommute = (activity) => activity.commute === 1;

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
					<th>{t("signup.emissions.activityTableActivityColumn")}</th>
					<th>{t("signup.emissions.activityTableDistanceColumn")}</th>
					<th>{t("signup.emissions.activityTableDateColumn")}</th>
					<th>{t("signup.emissions.activityTableSavingsColumn")}</th>
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