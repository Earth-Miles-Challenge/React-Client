import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { StravaConnectStep, ProfileStep, EmissionsStep } from './steps';
import { CommutesFeature } from './commutes';
import { selectCurrentUser } from 'features/users';
// import { FormProgressBar } from 'components';
import { useGetUserQuery } from 'store/server-api';

import './sign-up-page.scss';

export const SignUpPage = () => {
	const { t } = useTranslation();
	const { id } = useSelector(selectCurrentUser);
	const { data, isLoading } = useGetUserQuery(id);
	const [ activeStep, setActiveStep ] = useState(null);
	useEffect(() => {
		if (!isLoading) {
			if (data && data.hasOwnProperty('activity_platform')) {
				setActiveStep(!data.email ? 1 : 2)
			} else {
				setActiveStep(0);
			}
		}
	}, [data, isLoading]);

	const redirectToHome = () => window.location = window.location.pathname;
	const getPageHeader = () => {
		switch (activeStep) {
			case 0: return t('signup.start.header');
			case 1: return t('signup.profile.header');
			case 2: return t('signup.impact.header');
			default: return '';
		}
	}

	const getPageMainContent = () => {
		if (isLoading) return 'loading...';
		switch (activeStep) {
			case 0: return <StravaConnectStep onConnected={redirectToHome} />;
			case 1: return <ProfileStep profile={data} onCompleteStep={() => setActiveStep(2)} />;
			case 2: return <EmissionsStep />;
			default: return '';
		}
	}

	const getPageSupplementaryContent = () => {
		switch (activeStep) {
			case 0: return <CommutesFeature />;
			default: return '';
		}
	}

	return (
		<>
			<div className="form-container">
				<h1>{getPageHeader()}</h1>
				{getPageMainContent()}
			</div>
			{getPageSupplementaryContent()}
		</>
	)
}