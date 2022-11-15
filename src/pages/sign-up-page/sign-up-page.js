import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { StravaConnectStep, ProfileStep, EmissionsStep } from './steps';
import { selectCurrentUser, selectIsStravaConnected } from 'features/users';
import { fetchLatest } from 'features/activities';
import { FormProgressBar } from 'components';

export const SignUpPage = () => {
	const { t } = useTranslation();
	const STEPS = [
		t('signup.progress-bar-1'),
		t('signup.progress-bar-2'),
		t('signup.progress-bar-3')
	];
	const profile = useSelector(selectCurrentUser);
	const [ activeStep, setActiveStep ] = useState(useSelector(selectIsStravaConnected) ? 1 : 0);
	const fetchStravaActivities = () => {
		fetchLatest(profile.id);
	};

	return (
		<div className="form-container">
			<h1>{t('signup.top-header')}</h1>
			<FormProgressBar steps={STEPS} activeStep={STEPS[activeStep]} />
			{
				( activeStep === 0 && <StravaConnectStep onConnected={fetchStravaActivities} /> )
				|| ( activeStep === 1 && <ProfileStep profile={profile} onCompleteStep={() => setActiveStep(2)} /> )
				|| ( activeStep === 2 && <EmissionsStep /> )
			}
		</div>
	)
}