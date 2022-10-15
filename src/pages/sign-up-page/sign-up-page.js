import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { StravaConnectStep, ProfileStep, EmissionsStep } from './steps';
import { selectProfile } from 'features/users';
import { FormProgressBar } from 'components';

export const SignUpPage = () => {
	const { t } = useTranslation();
	const STEPS = [
		t('signup.progress-bar-1'),
		t('signup.progress-bar-2'),
		t('signup.progress-bar-3')
	];
	const profile = useSelector(selectProfile);
	const [ activeStep, setActiveStep ] = useState(0);

	useEffect(() => {
		return profile.strava_id !== '' && setActiveStep(1);
	}, [profile]);

	return (
		<div className="form-container">
			<h1>{t('signup.top-header')}</h1>
			<FormProgressBar steps={STEPS} activeStep={STEPS[activeStep]} />
			{
				( activeStep === 0 && <StravaConnectStep /> )
				|| ( activeStep === 1 && <ProfileStep profile={profile} onCompleteStep={() => setActiveStep(2)} /> )
				|| ( activeStep === 2 && <EmissionsStep /> )
			}
		</div>
	)
}