import { useTranslation } from 'react-i18next';
import { EmissionsByActivitySummaryItem } from './emissions-by-activity-summary-item';

export const EmissionsByActivitySummary = props => {
	const { activities } = props;

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
				{activities.map((activity) => <EmissionsByActivitySummaryItem key={activity.id} activity={activity} />)}
			</tbody>
		</table>
	);
}