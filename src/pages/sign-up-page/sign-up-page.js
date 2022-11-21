import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { StravaConnectStep, ProfileStep, EmissionsStep } from './steps';
import { selectCurrentUser, selectIsStravaConnected } from 'features/users';
import { FormProgressBar } from 'components';
import { useGetUserQuery } from 'store/server-api';

export const SignUpPage = () => {
	const { t } = useTranslation();
	const STEPS = [
		t('signup.progress-bar-1'),
		t('signup.progress-bar-2'),
		t('signup.progress-bar-3')
	];
	const { id } = useSelector(selectCurrentUser);
	const { data, error, isLoading } = useGetUserQuery(id);
	const [ activeStep, setActiveStep ] = useState(null);
	useEffect(() => {
		if (!isLoading) {
			if (data.hasOwnProperty('activity_platform')) {
				setActiveStep(data.email !== '' ? 2 : 1)
			} else {
				setActiveStep(0);
			}
		}
	}, [data, isLoading]);
	const redirectToHome = () => window.location = window.location.pathname;

	return (
		<div className="form-container">
			<h1>{t('signup.top-header')}</h1>
			<FormProgressBar steps={STEPS} activeStep={STEPS[activeStep]} />
			{
				isLoading
					? 'loading...'
					: ( activeStep === 0 && <StravaConnectStep onConnected={redirectToHome} /> )
					|| ( activeStep === 1 && <ProfileStep profile={data} onCompleteStep={() => setActiveStep(2)} /> )
					|| ( activeStep === 2 && <EmissionsStep /> )
			}
		</div>
	)
}