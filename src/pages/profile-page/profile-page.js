import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { ProfileForm, selectCurrentUser } from 'features/users';
import { useGetUserQuery } from 'store/server-api';

const redirectToLogin = async () => window.location = process.env.REACT_APP_URL + '/login';

export const ProfilePage = () => {
	const { t } = useTranslation();
	const { id } = useSelector(selectCurrentUser);

	if (!id) redirectToLogin().catch(console.error);

	const { data: userData, error: userDataError, isLoading: userDataIsLoading } = useGetUserQuery(id);

	if (userDataIsLoading) return;
	if (!userData || userDataError) redirectToLogin().catch(console.error);

	return (
		<>
			<div className="banner-container">
				<h1>{t('profilePage.header')}</h1>
				<p>{t('profilePage.teaser')}</p>
			</div>
			<div className="profile-container">
				<h2>{t('profilePage.profileForm.header')}</h2>
				<p>{t('profilePage.profileForm.teaser')}</p>
				<ProfileForm profile={userData} />
			</div>
		</>
	)
}