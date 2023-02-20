import { ActivityMap } from 'features/activities';
import { useTranslation } from 'react-i18next';
import { useUpdateUserActivityMutation } from 'store/server-api';

export const EmissionsByActivitySummaryItem = props => {
	const { activity, onUpdateActivity } = props;
	const { t } = useTranslation();
	const [ updateActivity ] = useUpdateUserActivityMutation();
	const distance = (activity.distance / 1000).toFixed(2) + 'km';
	const date = new Date(activity.start_date).toLocaleDateString('en-US', {
		timezone: activity.timezone,
		month: 'long',
		day: 'numeric',
		year: 'numeric'
	});
	const impactActivity = activity.activity_impact && activity.activity_impact.fossil_alternative_co2;

	const onClickMarkCommute = () => {
		updateActivity({
			userId: activity.user_id,
			activityId: activity.id,
			commute: true
		})

		onUpdateActivity();
	}

	const getActivityImpact = () => {
		if (impactActivity) {
			return activity.activity_impact.fossil_alternative_co2 / 1000 + 'kg CO2e';
		} else {
			return <>
				{t('signup.impact.activityNonCommuteDescription')}&nbsp;<button className="link" onClick={onClickMarkCommute}>{t('signup.impact.activityCommuteToggle')}</button>
			</>
		}
	}

	const classNames = impactActivity ? 'activity-impact' : 'activity-impact non-commute';

	return (
		<div className="activity">
			<h4>{activity.description}</h4>
			<span className="activity-distance">{distance}</span>
			<span className={classNames}>{getActivityImpact()}</span>
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