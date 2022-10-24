import { useEffect, useState } from 'react';
import { EmissionsByActivitySummary, getAthleteActivities } from 'features/activities';
import { useTranslation, Trans } from 'react-i18next';

import './emissions.scss';

export const Emissions = () => {
	const { t } = useTranslation();

	const [ activities, setActivities ] = useState([]);
	useEffect(() => {
		(async () => {
			const activities = await getAthleteActivities();
			setActivities(activities);
		})();
	}, []);

	const [ showNonCommuteActivites, setShowNonCommuteActivities ] = useState(false);
	const toggle = () => setShowNonCommuteActivities(prev => !! prev);

	const emissionsAvoided = t('signup.emissions.totalAmount', {'amount': 2.3});

	return (
		<div className="emissions-savings-wrapper">
			<div className="emissions-savings-summary">
				<Trans i18nKey="signup.emissions.totalBlurb">
					Your human-powered commutes have helped you avoid approximately <span className='total-savings'>{{emissionsAvoided}}</span>
				</Trans>
			</div>
			<div className="emissions-savings-by-activity">
				<h2>{t('signup.emissions.activityHeader')}</h2>
				{! showNonCommuteActivites && <button className="toggle" onClick={toggle}>{t('signup.emissions.toggleAll')}</button>}
				{showNonCommuteActivites && <button className="toggle" onClick={toggle}>{t('signup.emissions.toggleSavers')}</button>}
				<EmissionsByActivitySummary
					activities={activities}
				/>
			</div>
		</div>
	)
}

export default Emissions;