import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { RegistrationForm, selectCurrentUser } from 'features/users';

export const RegistrationPage = () => {
	const { t } = useTranslation();
	const { id } = useSelector(selectCurrentUser);

	return (
		<>
			<div className="banner-container">
				<h1>{t('registrationPage.header')}</h1>
				<p>{t('registrationPage.teaser')}</p>
			</div>
			<section className="main-container">
				<div className="registration-container form-container">
					<h2>{t('registrationPage.registrationForm.header')}</h2>
					<RegistrationForm userId={id} />
				</div>
			</section>
		</>
	)
}