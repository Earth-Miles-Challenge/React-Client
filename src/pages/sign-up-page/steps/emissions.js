import { useEffect, useState } from 'react';
import { EmissionsByActivitySummary, getAthleteActivities } from 'features/activities';
import { useTranslation, Trans } from 'react-i18next';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from 'features/users';
import { getEmissionsAvoidedByUser } from 'features/impact';

import './emissions.scss';

export const Emissions = () => {
	const { t } = useTranslation();
	const currentUser = useSelector(selectCurrentUser);
	const [ activities, setActivities ] = useState([]);
	useEffect(() => {
		(async () => {
			const activities = await getAthleteActivities(currentUser.id);
			setActivities(activities);
		})();
	}, [currentUser.id]);

	const [emissionsAvoided, setEmissionsAvoided] = useState(0);
	useEffect(() => {
		(async () => {
			const response = await getEmissionsAvoidedByUser(currentUser.id);
			if (response.success) {
				setEmissionsAvoided(parseInt(response.emissionsAvoided));
			}
		})();
	}, [currentUser.id]);

	const [ showOnlyCommutes, setShowOnlyCommutes ] = useState(true);
	const toggle = () => setShowOnlyCommutes(prev => !prev);

	const emissionsAvoidedKg = t('signup.emissions.totalAmount', {'amount': emissionsAvoided / 1000});

	return (
		<div className="emissions-savings-wrapper">
			<div className="emissions-savings-summary">
				<Trans i18nKey="signup.emissions.totalBlurb">
					Your human-powered commutes have helped you avoid approximately <span className='total-savings'>{{emissionsAvoidedKg}}</span>
				</Trans>
			</div>
			<div className="emissions-savings-by-activity">
				<h2>{t('signup.emissions.activityHeader')}</h2>
				{showOnlyCommutes && <button className="toggle link" onClick={toggle}>{t('signup.emissions.toggleAll')}</button>}
				{!showOnlyCommutes && <button className="toggle link" onClick={toggle}>{t('signup.emissions.toggleSavers')}</button>}
				<EmissionsByActivitySummary
					activities={activities}
					sortBy='date'
					filterCommutes={showOnlyCommutes}
				/>
			</div>
		</div>
	)
}

export default Emissions;