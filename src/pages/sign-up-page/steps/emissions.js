import { useState } from 'react';
import { EmissionsByActivitySummary } from 'features/activities';
import { useTranslation, Trans } from 'react-i18next';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from 'features/users';
import { useGetUserActivitiesQuery } from 'store/server-api';

import './emissions.scss';

export const EmissionsImpact = ({emissionsAvoided}) => {
	const { t } = useTranslation();
	const emissionsAvoidedKg = t('signup.impact.totalAmount', {'amount': emissionsAvoided / 1000});
	return (
		<div className="emissions-savings-summary">
			<Trans i18nKey="signup.impact.totalBlurb">
				Your human-powered commutes have helped you avoid approximately <span className='total-savings'>{{emissionsAvoidedKg}}</span>
			</Trans>
		</div>
	)
}

export const EmissionsByActivity = ({onUpdateActivity}) => {
	const { t } = useTranslation();
	const currentUser = useSelector(selectCurrentUser);
	const { data, isLoading } = useGetUserActivitiesQuery(currentUser.id);
	const [ showOnlyCommutes, setShowOnlyCommutes ] = useState(true);
	const toggle = () => setShowOnlyCommutes(prev => !prev);

	if (isLoading) return null;

	return (
		<div className="emissions-savings-by-activity">
			<h2>{t('signup.impact.activityHeader')}</h2>
			{showOnlyCommutes && <button className="toggle link" onClick={toggle}>{t('signup.impact.toggleAll')}</button>}
			{!showOnlyCommutes && <button className="toggle link" onClick={toggle}>{t('signup.impact.toggleSavers')}</button>}
			<EmissionsByActivitySummary
				activities={data}
				sortBy='date'
				filterCommutes={showOnlyCommutes}
				onUpdateActivity={onUpdateActivity}
			/>
		</div>
	)
}