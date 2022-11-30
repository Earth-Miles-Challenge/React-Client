import { useEffect, useState } from 'react';
import { EmissionsByActivitySummary, getAthleteActivities } from 'features/activities';
import { useTranslation, Trans } from 'react-i18next';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from 'features/users';
import { getEmissionsAvoidedByUser } from 'features/impact';

import './emissions.scss';

export const EmissionsImpact = () => {
	const { t } = useTranslation();
	const currentUser = useSelector(selectCurrentUser);
	const [emissionsAvoided, setEmissionsAvoided] = useState(0);
	useEffect(() => {
		if (!currentUser.id) return;
		(async () => {
			const response = await getEmissionsAvoidedByUser(currentUser.id);
			if (response.success) {
				setEmissionsAvoided(parseInt(response.emissionsAvoided));
			}
		})();
	}, [currentUser.id]);

	const emissionsAvoidedKg = t('signup.impact.totalAmount', {'amount': emissionsAvoided / 1000});
	return (
		<div className="emissions-savings-summary">
			<Trans i18nKey="signup.impact.totalBlurb">
				Your human-powered commutes have helped you avoid approximately <span className='total-savings'>{{emissionsAvoidedKg}}</span>
			</Trans>
		</div>
	)
}

export const EmissionsByActivity = () => {
	const { t } = useTranslation();
	const currentUser = useSelector(selectCurrentUser);

	const [ activities, setActivities ] = useState([]);
	useEffect(() => {
		if (!currentUser.id) return;
		(async () => {
			const activities = await getAthleteActivities(currentUser.id);
			setActivities(activities);
		})();
	}, [currentUser.id]);

	const [ showOnlyCommutes, setShowOnlyCommutes ] = useState(true);
	const toggle = () => setShowOnlyCommutes(prev => !prev);

	return (
		<div className="emissions-savings-by-activity">
			<h2>{t('signup.impact.activityHeader')}</h2>
			{showOnlyCommutes && <button className="toggle link" onClick={toggle}>{t('signup.impact.toggleAll')}</button>}
			{!showOnlyCommutes && <button className="toggle link" onClick={toggle}>{t('signup.impact.toggleSavers')}</button>}
			<EmissionsByActivitySummary
				activities={activities}
				sortBy='date'
				filterCommutes={showOnlyCommutes}
			/>
		</div>
	)
}