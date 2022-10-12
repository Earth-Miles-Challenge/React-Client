import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { StravaConnectButton, ProfileForm, selectProfile, updateProfile } from 'features/users';
import { EmissionsByActivitySummary, withActivities } from 'features/activities';
import { FormProgressBar } from 'components';

const ActivitySummary = withActivities(EmissionsByActivitySummary);

export const SignUpPage = () => {
	const dispatch = useDispatch();
	const { t } = useTranslation();
	const profile = useSelector(selectProfile);

	const STEPS = [
		t('signup.progress-bar-1'),
		t('signup.progress-bar-2'),
		t('signup.progress-bar-3')
	];

	const [ activeStep, setActiveStep ] = useState(profile.strava_id !== '' ? STEPS[1] : STEPS[0]);

	const onProfileChange = (field, value) => {
		dispatch(updateProfile({field, value}))
	}

	return (
		<div className="form-container">
			<h1>{t('signup.top-header')}</h1>
			<FormProgressBar steps={STEPS} activeStep={activeStep} />
			{
				activeStep === t('signup.progress-bar-1') &&
				<div className="strava-connect-wrapper">
					<StravaConnectButton />
				</div>
			}
			{
				activeStep === t('signup.progress-bar-2') &&
				<div className="profile-form-wrapper">
					<ProfileForm
						profile={profile}
						onChange={onProfileChange}
						onContinue={() => setActiveStep(STEPS[2])}
					/>
				</div>
			}
			{
				activeStep === t('signup.progress-bar-3') &&
				<div className="emissions-savings-wrapper">
					{ActivitySummary}
				</div>
			}
		</div>
	)
}