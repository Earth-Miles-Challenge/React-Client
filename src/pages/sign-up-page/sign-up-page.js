import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { StravaConnectStep, ProfileStep, EmissionsImpact, EmissionsByActivity } from './steps';
import { CommutesFeature } from './commutes';
import { selectCurrentUser } from 'features/users';
import { useGetUserQuery, useGetEmissionsAvoidedByUserQuery } from 'store/server-api';

import './sign-up-page.scss';

export const SignUpPageContent = (props) => {
	const { pageHeader, mainContent, supplementaryContent } = props;
	return (
		<>
			<div className="form-container">
				<h1>{pageHeader}</h1>
				{mainContent}
			</div>
			{supplementaryContent}
		</>
	)
}

export const SignUpPage = () => {
	const { t } = useTranslation();
	const { id } = useSelector(selectCurrentUser);

	if (id) return <SignUpPageAuthenticated userId={id} />

	const redirectToHome = () => window.location = window.location.pathname;

	return <SignUpPageContent
		pageHeader={t('signup.start.header')}
		mainContent={<StravaConnectStep onConnected={redirectToHome} />}
		supplementaryContent={<CommutesFeature />}
	/>
}

export const SignUpPageAuthenticated = (props) => {
	const { userId } = props;
	const { t } = useTranslation();
	const { data: userData, error: userDataError, isLoading: userDataIsLoading } = useGetUserQuery(userId);
	const [ activeStep, setActiveStep ] = useState(null);

	useEffect(() => {
		setActiveStep((!userDataIsLoading && userData && userData.hasOwnProperty('activity_platform') && userData.email) ? 2 : 1);
	}, [userData, userDataIsLoading]);

	const { data: impactData, refetch: refetchImpactData } = useGetEmissionsAvoidedByUserQuery(userId);
	const handleActivityUpdate = () => {
		refetchImpactData();
	}

	if (userDataError) return 'Error...';

	const getPageHeader = () => {
		switch (activeStep) {
			case 1: return t('signup.profile.header');
			case 2: return t('signup.impact.header');
			default: return '';
		}
	}

	const getPageMainContent = () => {
		if (userDataIsLoading) return 'Loading...';
		switch (activeStep) {
			case 1: return <p>{t('signup.profile.teaser')}</p>
			case 2: return !!impactData ? <EmissionsImpact emissionsAvoided={impactData.emissionsAvoided} /> : '';
			default: return '';
		}
	}

	const getPageSupplementaryContent = () => {
		switch (activeStep) {
			case 1: return !!userData ? <ProfileStep profile={userData} onCompleteStep={() => setActiveStep(2)} /> : '';
			case 2: return !!impactData ? <EmissionsByActivity onUpdateActivity={handleActivityUpdate} /> : '';
			default: return '';
		}
	}

	return <SignUpPageContent
		pageHeader={getPageHeader()}
		mainContent={getPageMainContent()}
		supplementaryContent={getPageSupplementaryContent()}
	/>
}